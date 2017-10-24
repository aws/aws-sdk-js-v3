import {chain, memoize} from '@aws/credential-provider-base';
import {fromEnv} from '@aws/credential-provider-env';
import {
    Ec2InstanceMetadataInit,
    ENV_CMDS_FULL_URI,
    ENV_CMDS_RELATIVE_URI,
    fromContainerMetadata,
    fromInstanceMetadata,
    RemoteProviderInit,
} from '@aws/credential-provider-imds';
import {fromIni, FromIniInit} from '@aws/credential-provider-ini';
import {CredentialProvider} from '@aws/types';

/**
 * Creates a credential provider that will attempt to find credentials from the
 * following sources (listed in order of precedence):
 *   * Environment variables exposed via `process.env`
 *   * Shared credentials and config ini files
 *   * The EC2/ECS Instance Metadata Service
 *
 * The default credential provider will invoke one provider at a time and only
 * continue to the next if no credentials have been located. For example, if
 * the process finds values defined via the `AWS_ACCESS_KEY_ID` and
 * `AWS_SECRET_ACCESS_KEY` environment variables, the files at
 * `~/.aws/credentials` and `~/.aws/config` will not be read, nor will any
 * messages be sent to the Instance Metadata Service.
 *
 * @param init                  Configuration that is passed to each individual
 *                              provider
 *
 * @see fromEnv                 The function used to source credentials from
 *                              environment variables
 * @see fromIni                 The function used to source credentials from INI
 *                              files
 * @see fromInstanceMetadata    The function used to source credentials from the
 *                              EC2 Instance Metadata Service
 * @see fromContainerMetadata   The function used to source credentials from the
 *                              ECS Container Metadata Service
 */
export function defaultProvider(
    init: Ec2InstanceMetadataInit & FromIniInit & RemoteProviderInit = {}
): CredentialProvider {
    return memoize(chain(
        fromEnv(),
        fromIni(init),
        process.env[ENV_CMDS_RELATIVE_URI] || process.env[ENV_CMDS_FULL_URI]
            ? fromContainerMetadata(init)
            : fromInstanceMetadata(init)
    ));
}
