import {CredentialProvider} from "@aws/types";
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
import {CredentialError} from "./CredentialError";
import {parse} from "url";
import {RequestOptions} from "http";

export const ENV_CMDS_FULL_URI = 'AWS_CONTAINER_CREDENTIALS_FULL_URI';
export const ENV_CMDS_RELATIVE_URI = 'AWS_CONTAINER_CREDENTIALS_RELATIVE_URI';
export const ENV_CMDS_AUTH_TOKEN = 'AWS_CONTAINER_AUTHORIZATION_TOKEN';

export function fromContainerMetadata(
    init: RemoteProviderInit = {}
): CredentialProvider {
    const {timeout, maxRetries} = providerConfigFromInit(init);
    return () => {
        return getCmdsUri().then(url => retry(async () => {
            const credsResponse = JSON.parse(
                await requestFromEcsImds(timeout, url)
            );
            if (!isImdsCredentials(credsResponse)) {
                throw new CredentialError(
                    'Invalid response received from instance metadata service.'
                );
            }

            return fromImdsCredentials(credsResponse);
        }, maxRetries));
    }
}

function requestFromEcsImds(
    timeout: number,
    options: RequestOptions
): Promise<string> {
    if (process.env[ENV_CMDS_AUTH_TOKEN]) {
        const {headers = {}} = options;
        headers.Authorization = process.env[ENV_CMDS_AUTH_TOKEN];
        options.headers = headers;
    }

    return httpGet({
        ...options,
        timeout,
    })
        .then(buffer => buffer.toString());
}

const CMDS_IP = '169.254.170.2';
const GREENGRASS_HOSTS = new Set([
    'localhost',
    '127.0.0.1',
]);
const GREENGRASS_PROTOCOLS = new Set([
    'http:',
    'https:',
]);

function getCmdsUri(): Promise<RequestOptions> {
    if (process.env[ENV_CMDS_RELATIVE_URI]) {
        return Promise.resolve({
            hostname: CMDS_IP,
            path: process.env[ENV_CMDS_RELATIVE_URI],
        });
    }

    if (process.env[ENV_CMDS_FULL_URI]) {
        const parsed = parse(process.env[ENV_CMDS_FULL_URI]);
        if (!parsed.hostname || !GREENGRASS_HOSTS.has(parsed.hostname)) {
            return Promise.reject(new CredentialError(
                `${parsed.hostname} is not a valid container metadata service hostname`,
                false
            ));
        }

        if (!parsed.protocol || !GREENGRASS_PROTOCOLS.has(parsed.protocol)) {
            return Promise.reject(new CredentialError(
                `${parsed.protocol} is not a valid container metadata service protocol`,
                false
            ));
        }

        return Promise.resolve({
            ...parsed,
            port: parsed.port ? Number.parseInt(parsed.port, 10) : undefined
        });
    }

    return Promise.reject(new CredentialError(
        'The container metadata credential provider cannot be used unless' +
        ` the ${ENV_CMDS_RELATIVE_URI} or ${ENV_CMDS_FULL_URI} environment` +
        ' variable is set',
        false
    ));
}
