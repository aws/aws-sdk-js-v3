import {CredentialProvider} from "./CredentialProvider";
import {
    RemoteProviderInit,
    providerConfigFromInit,
} from './remoteProvider/RemoteProviderInit';
import {httpGet} from './remoteProvider/httpGet';
import {
    fromImdsCredentials,
    isImdsCredentials,
} from './remoteProvider/ImdsCredentials';
import {retry} from './remoteProvider/retry';

export const ENV_CMDS_RELATIVE_URI = 'AWS_CONTAINER_CREDENTIALS_RELATIVE_URI';

export function fromContainerMetadata(
    init: RemoteProviderInit = {}
): CredentialProvider {
    const {timeout, maxRetries} = providerConfigFromInit(init);
    return () => {
        const path = process.env[ENV_CMDS_RELATIVE_URI];

        if (!path) {
            return Promise.reject(new Error('The container metadata credential'
                + ` provider cannot be used unless the ${ENV_CMDS_RELATIVE_URI}`
                + ' environment variable is set'));
        }

        return retry(async () => {
            const credsResponse = JSON.parse(
                await requestFromEcsImds(timeout, path)
            );
            if (!isImdsCredentials(credsResponse)) {
                throw new Error(
                    'Invalid response received from instance metadata service.'
                );
            }

            return fromImdsCredentials(credsResponse);
        }, maxRetries);
    }
}

const CMDS_IP = '169.254.170.2';

function requestFromEcsImds(timeout: number, path: string): Promise<string> {
    return httpGet({
        host: CMDS_IP,
        path,
        timeout,
    })
        .then(buffer => buffer.toString());
}
