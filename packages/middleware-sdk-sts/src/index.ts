import { AwsAuthInputConfig, AwsAuthResolvedConfig, resolveAwsAuthConfig } from "@aws-sdk/middleware-signing";
import {
  AwsCredentialIdentity,
  ChecksumConstructor,
  Client,
  HashConstructor,
  Provider,
  RegionInfoProvider,
} from "@smithy/types";

/**
 * @public
 */
export interface StsAuthInputConfig extends AwsAuthInputConfig {}

interface PreviouslyResolved {
  credentialDefaultProvider: (input: any) => Provider<AwsCredentialIdentity>;
  region: string | Provider<string>;
  regionInfoProvider?: RegionInfoProvider;
  signingName?: string;
  serviceId: string;
  sha256: ChecksumConstructor | HashConstructor;
  useFipsEndpoint: Provider<boolean>;
  useDualstackEndpoint: Provider<boolean>;
}

export interface StsAuthResolvedConfig extends AwsAuthResolvedConfig {
  /**
   * Reference to STSClient class constructor.
   * @internal
   */
  stsClientCtor: new (clientConfig: any) => Client<any, any, any>;
}

export interface StsAuthConfigOptions {
  /**
   * Reference to STSClient class constructor.
   */
  stsClientCtor: new (clientConfig: any) => Client<any, any, any>;
}

/**
 * Set STS client constructor to `stsClientCtor` config parameter. It is used
 * for role assumers for STS client internally. See `clients/client-sts/defaultStsRoleAssumers.ts`
 * and `clients/client-sts/STSClient.ts`.
 */
export const resolveStsAuthConfig = <T>(
  input: T & PreviouslyResolved & StsAuthInputConfig,
  { stsClientCtor }: StsAuthConfigOptions
): T & StsAuthResolvedConfig => {
  return resolveAwsAuthConfig(
    Object.assign(input, {
      stsClientCtor,
    })
  );
};
