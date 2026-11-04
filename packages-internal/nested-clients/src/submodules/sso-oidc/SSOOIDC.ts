// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type CreateTokenCommandInput,
  type CreateTokenCommandOutput,
  CreateTokenCommand,
} from "./commands/CreateTokenCommand";
import { SSOOIDCClient } from "./SSOOIDCClient";

const commands = {
  CreateTokenCommand,
};

/**
 * @public
 */
export interface SSOOIDCRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface SSOOIDC {
  /**
   * @see {@link CreateTokenCommand}
   */
  createToken(
    args: CreateTokenCommandInput,
    options?: SSOOIDCRequestOptions
  ): Promise<CreateTokenCommandOutput>;
  createToken(
    args: CreateTokenCommandInput,
    cb: (err: any, data?: CreateTokenCommandOutput) => void
  ): void;
  createToken(
    args: CreateTokenCommandInput,
    options: SSOOIDCRequestOptions,
    cb: (err: any, data?: CreateTokenCommandOutput) => void
  ): void;
}

/**
 * IAM Identity Center OpenID Connect (OIDC) is a web service that enables a client (such as CLI or a native application) to register with IAM Identity Center. The service also enables the client to fetch the user’s access token upon successful authentication and authorization with IAM Identity Center.
 *
 * **API namespaces**
 *
 * IAM Identity Center uses the `sso` and `identitystore` API namespaces. IAM Identity Center OpenID Connect uses the `sso-oauth` namespace.
 *
 * **Considerations for using this guide**
 *
 * Before you begin using this guide, we recommend that you first review the following important information about how the IAM Identity Center OIDC service works.
 *
 * - The IAM Identity Center OIDC service currently implements only the portions of the OAuth 2.0 Device Authorization Grant standard ([https://tools.ietf.org/html/rfc8628](https://tools.ietf.org/html/rfc8628)) that are necessary to enable single sign-on authentication with the CLI.
 * - With older versions of the CLI, the service only emits OIDC access tokens, so to obtain a new token, users must explicitly re-authenticate. To access the OIDC flow that supports token refresh and doesn’t require re-authentication, update to the latest CLI version (1.27.10 for CLI V1 and 2.9.0 for CLI V2) with support for OIDC token refresh and configurable IAM Identity Center session durations. For more information, see [Configure Amazon Web Services access portal session duration](https://docs.aws.amazon.com/singlesignon/latest/userguide/configure-user-session.html).
 * - The access tokens provided by this service grant access to all Amazon Web Services account entitlements assigned to an IAM Identity Center user, not just a particular application.
 * - The documentation in this guide does not describe the mechanism to convert the access token into Amazon Web Services Auth (“sigv4”) credentials for use with IAM-protected Amazon Web Services service endpoints. For more information, see [GetRoleCredentials](https://docs.aws.amazon.com/singlesignon/latest/PortalAPIReference/API_GetRoleCredentials.html) in the *IAM Identity Center Portal API Reference Guide*.
 *
 * For general information about IAM Identity Center, see [What is IAM Identity Center?](https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html) in the *IAM Identity Center User Guide*.
 *
 * @public
 */
export class SSOOIDC extends SSOOIDCClient implements SSOOIDC {}
createAggregatedClient(commands, SSOOIDC);
