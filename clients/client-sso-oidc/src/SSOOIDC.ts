// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { CreateTokenCommand, CreateTokenCommandInput, CreateTokenCommandOutput } from "./commands/CreateTokenCommand";
import {
  RegisterClientCommand,
  RegisterClientCommandInput,
  RegisterClientCommandOutput,
} from "./commands/RegisterClientCommand";
import {
  StartDeviceAuthorizationCommand,
  StartDeviceAuthorizationCommandInput,
  StartDeviceAuthorizationCommandOutput,
} from "./commands/StartDeviceAuthorizationCommand";
import { SSOOIDCClient } from "./SSOOIDCClient";

/**
 * <p>AWS IAM Identity Center (successor to AWS Single Sign-On) OpenID Connect (OIDC) is a web service that enables a client (such as AWS CLI
 *       or a native application) to register with IAM Identity Center. The service also enables the client to
 *       fetch the user’s access token upon successful authentication and authorization with
 *       IAM Identity Center.</p>
 *          <note>
 *             <p>Although AWS Single Sign-On was renamed, the <code>sso</code> and
 *         <code>identitystore</code> API namespaces will continue to retain their original name for
 *         backward compatibility purposes. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html#renamed">IAM Identity Center rename</a>.</p>
 *          </note>
 *          <p>
 *             <b>Considerations for Using This Guide</b>
 *          </p>
 *          <p>Before you begin using this guide, we recommend that you first review the following
 *       important information about how the IAM Identity Center OIDC service works.</p>
 *          <ul>
 *             <li>
 *                <p>The IAM Identity Center OIDC service currently implements only the portions of the OAuth 2.0
 *           Device Authorization Grant standard (<a href="https://tools.ietf.org/html/rfc8628">https://tools.ietf.org/html/rfc8628</a>) that are necessary to enable single
 *           sign-on authentication with the AWS CLI. Support for other OIDC flows frequently needed
 *           for native applications, such as Authorization Code Flow (+ PKCE), will be addressed in
 *           future releases.</p>
 *             </li>
 *             <li>
 *                <p>The service emits only OIDC access tokens, such that obtaining a new token (For
 *           example, token refresh) requires explicit user re-authentication.</p>
 *             </li>
 *             <li>
 *                <p>The access tokens provided by this service grant access to all AWS account
 *           entitlements assigned to an IAM Identity Center user, not just a particular application.</p>
 *             </li>
 *             <li>
 *                <p>The documentation in this guide does not describe the mechanism to convert the access
 *           token into AWS Auth (“sigv4”) credentials for use with IAM-protected AWS service
 *           endpoints. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/PortalAPIReference/API_GetRoleCredentials.html">GetRoleCredentials</a> in the <i>IAM Identity Center Portal API Reference
 *             Guide</i>.</p>
 *             </li>
 *          </ul>
 *
 *          <p>For general information about IAM Identity Center, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">What is
 *         IAM Identity Center?</a> in the <i>IAM Identity Center User Guide</i>.</p>
 */
export class SSOOIDC extends SSOOIDCClient {
  /**
   * <p>Creates and returns an access token for the authorized client. The access token issued
   *       will be used to fetch short-term credentials for the assigned roles in the AWS
   *       account.</p>
   */
  public createToken(args: CreateTokenCommandInput, options?: __HttpHandlerOptions): Promise<CreateTokenCommandOutput>;
  public createToken(args: CreateTokenCommandInput, cb: (err: any, data?: CreateTokenCommandOutput) => void): void;
  public createToken(
    args: CreateTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTokenCommandOutput) => void
  ): void;
  public createToken(
    args: CreateTokenCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTokenCommandOutput) => void),
    cb?: (err: any, data?: CreateTokenCommandOutput) => void
  ): Promise<CreateTokenCommandOutput> | void {
    const command = new CreateTokenCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Registers a client with IAM Identity Center. This allows clients to initiate device authorization.
   *       The output should be persisted for reuse through many authentication requests.</p>
   */
  public registerClient(
    args: RegisterClientCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterClientCommandOutput>;
  public registerClient(
    args: RegisterClientCommandInput,
    cb: (err: any, data?: RegisterClientCommandOutput) => void
  ): void;
  public registerClient(
    args: RegisterClientCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterClientCommandOutput) => void
  ): void;
  public registerClient(
    args: RegisterClientCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterClientCommandOutput) => void),
    cb?: (err: any, data?: RegisterClientCommandOutput) => void
  ): Promise<RegisterClientCommandOutput> | void {
    const command = new RegisterClientCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Initiates device authorization by requesting a pair of verification codes from the
   *       authorization service.</p>
   */
  public startDeviceAuthorization(
    args: StartDeviceAuthorizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDeviceAuthorizationCommandOutput>;
  public startDeviceAuthorization(
    args: StartDeviceAuthorizationCommandInput,
    cb: (err: any, data?: StartDeviceAuthorizationCommandOutput) => void
  ): void;
  public startDeviceAuthorization(
    args: StartDeviceAuthorizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDeviceAuthorizationCommandOutput) => void
  ): void;
  public startDeviceAuthorization(
    args: StartDeviceAuthorizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartDeviceAuthorizationCommandOutput) => void),
    cb?: (err: any, data?: StartDeviceAuthorizationCommandOutput) => void
  ): Promise<StartDeviceAuthorizationCommandOutput> | void {
    const command = new StartDeviceAuthorizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
