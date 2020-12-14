import { SSOOIDCClient } from "./SSOOIDCClient";
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
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>AWS Single Sign-On (SSO) OpenID Connect (OIDC) is a web service that enables a client
 *       (such as AWS CLI or a native application) to register with AWS SSO. The service also
 *       enables the client to fetch the user’s access token upon successful authentication and
 *       authorization with AWS SSO. This service conforms with the OAuth 2.0 based implementation of
 *       the device authorization grant standard (<a href="https://tools.ietf.org/html/rfc8628">https://tools.ietf.org/html/rfc8628</a>).</p>
 *
 *          <p>For general information about AWS SSO, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">What is AWS
 *         Single Sign-On?</a> in the <i>AWS SSO User Guide</i>.</p>
 *
 *          <p>This API reference guide describes the AWS SSO OIDC operations that you can call
 *       programatically and includes detailed information on data types and errors.</p>
 *
 *          <note>
 *             <p>AWS provides SDKs that consist of libraries and sample code for various programming
 *         languages and platforms such as Java, Ruby, .Net, iOS, and Android. The SDKs provide a
 *         convenient way to create programmatic access to AWS SSO and other AWS services. For more
 *         information about the AWS SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p>
 *          </note>
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
   * <p>Registers a client with AWS SSO. This allows clients to initiate device authorization.
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
   * <p>Initiates device authorization by requesting a pair of verification codes from the authorization service.</p>
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
