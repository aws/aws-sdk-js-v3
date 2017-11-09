import {CredentialProvider} from "@aws/types";
import {
    Ec2InstanceMetadataInit,
    providerConfigFromInit,
} from './remoteProvider/RemoteProviderInit';
import {httpGet} from './remoteProvider/httpGet';
import {
    fromImdsCredentials,
    isImdsCredentials,
} from './remoteProvider/ImdsCredentials';
import {retry} from './remoteProvider/retry';
import {CredentialError} from '@aws/credential-provider-base';

/**
 * Creates a credential provider that will source credentials from the EC2
 * Instance Metadata Service
 */
export function fromInstanceMetadata(
    init: Ec2InstanceMetadataInit = {}
): CredentialProvider {
    const {timeout, maxRetries} = providerConfigFromInit(init);
    return async () => {
        const {
            profile = (await retry<string>(
                async () => await requestFromEc2Imds(timeout),
                maxRetries
            )).trim()
        } = init;

        return retry(async () => {
            const credsResponse = JSON.parse(
                await requestFromEc2Imds(timeout, profile)
            );
            if (!isImdsCredentials(credsResponse)) {
                throw new CredentialError(
                    'Invalid response received from instance metadata service.'
                );
            }

            return fromImdsCredentials(credsResponse);
        }, maxRetries);
    };
}

const IMDS_IP = '169.254.169.254';
const IMDS_PATH = 'latest/meta-data/iam/security-credentials';

function requestFromEc2Imds(timeout: number, path?: string): Promise<string> {
    return httpGet({
        host: IMDS_IP,
        path: `/${IMDS_PATH}/${path ? path : ''}`,
        timeout,
    })
        .then(buffer => buffer.toString());
}
