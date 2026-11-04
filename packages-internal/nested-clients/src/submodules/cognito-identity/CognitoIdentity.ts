// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import { CognitoIdentityClient } from "./CognitoIdentityClient";
import {
  type GetCredentialsForIdentityCommandInput,
  type GetCredentialsForIdentityCommandOutput,
  GetCredentialsForIdentityCommand,
} from "./commands/GetCredentialsForIdentityCommand";
import { type GetIdCommandInput, type GetIdCommandOutput, GetIdCommand } from "./commands/GetIdCommand";

const commands = {
  GetCredentialsForIdentityCommand,
  GetIdCommand,
};

/**
 * @public
 */
export interface CognitoIdentityRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface CognitoIdentity {
  /**
   * @see {@link GetCredentialsForIdentityCommand}
   */
  getCredentialsForIdentity(
    args: GetCredentialsForIdentityCommandInput,
    options?: CognitoIdentityRequestOptions
  ): Promise<GetCredentialsForIdentityCommandOutput>;
  getCredentialsForIdentity(
    args: GetCredentialsForIdentityCommandInput,
    cb: (err: any, data?: GetCredentialsForIdentityCommandOutput) => void
  ): void;
  getCredentialsForIdentity(
    args: GetCredentialsForIdentityCommandInput,
    options: CognitoIdentityRequestOptions,
    cb: (err: any, data?: GetCredentialsForIdentityCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIdCommand}
   */
  getId(
    args: GetIdCommandInput,
    options?: CognitoIdentityRequestOptions
  ): Promise<GetIdCommandOutput>;
  getId(
    args: GetIdCommandInput,
    cb: (err: any, data?: GetIdCommandOutput) => void
  ): void;
  getId(
    args: GetIdCommandInput,
    options: CognitoIdentityRequestOptions,
    cb: (err: any, data?: GetIdCommandOutput) => void
  ): void;
}

/**
 * Amazon Cognito Federated Identities
 *
 * Amazon Cognito Federated Identities is a web service that delivers scoped temporary credentials to mobile devices and other untrusted environments. It uniquely identifies a device and supplies the user with a consistent identity over the lifetime of an application.
 *
 * Using Amazon Cognito Federated Identities, you can enable authentication with one or more third-party identity providers (Facebook, Google, or Login with Amazon) or an Amazon Cognito user pool, and you can also choose to support unauthenticated access from your app. Cognito delivers a unique identifier for each user and acts as an OpenID token provider trusted by Security Token Service (STS) to access temporary, limited-privilege Amazon Web Services credentials.
 *
 * For a description of the authentication flow from the Amazon Cognito Developer Guide see [Authentication Flow](https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flow.html).
 *
 * For more information see [Amazon Cognito Federated Identities](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-identity.html).
 *
 * @public
 */
export class CognitoIdentity extends CognitoIdentityClient implements CognitoIdentity {}
createAggregatedClient(commands, CognitoIdentity);
