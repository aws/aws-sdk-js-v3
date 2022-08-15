// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  GetRoleCredentialsCommand,
  GetRoleCredentialsCommandInput,
  GetRoleCredentialsCommandOutput,
} from "./commands/GetRoleCredentialsCommand";
import {
  ListAccountRolesCommand,
  ListAccountRolesCommandInput,
  ListAccountRolesCommandOutput,
} from "./commands/ListAccountRolesCommand";
import {
  ListAccountsCommand,
  ListAccountsCommandInput,
  ListAccountsCommandOutput,
} from "./commands/ListAccountsCommand";
import { LogoutCommand, LogoutCommandInput, LogoutCommandOutput } from "./commands/LogoutCommand";
import { SSOClient } from "./SSOClient";

/**
 * <p>Amazon Web Services Single Sign On Portal is a web service that makes it easy for you to assign user access to
 *       Amazon Web Services SSO resources such as the AWS access portal. Users can get Amazon Web Services account applications and roles
 *       assigned to them and get federated into the application.</p>
 *
 *          <note>
 *             <p>Although Amazon Web Services Single Sign-On was renamed, the <code>sso</code> and
 *           <code>identitystore</code> API namespaces will continue to retain their original name for
 *         backward compatibility purposes. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html#renamed">Amazon Web Services SSO rename</a>.</p>
 *          </note>
 *
 *          <p>This reference guide describes the Amazon Web Services SSO Portal operations that you can call
 *       programatically and includes detailed information on data types and errors.</p>
 *
 *          <note>
 *             <p>Amazon Web Services provides SDKs that consist of libraries and sample code for various programming
 *         languages and platforms, such as Java, Ruby, .Net, iOS, or Android. The SDKs provide a
 *         convenient way to create programmatic access to Amazon Web Services SSO and other Amazon Web Services services. For more
 *         information about the Amazon Web Services SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p>
 *          </note>
 */
export class SSO extends SSOClient {
  /**
   * <p>Returns the STS short-term credentials for a given role name that is assigned to the
   *       user.</p>
   */
  public getRoleCredentials(
    args: GetRoleCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRoleCredentialsCommandOutput>;
  public getRoleCredentials(
    args: GetRoleCredentialsCommandInput,
    cb: (err: any, data?: GetRoleCredentialsCommandOutput) => void
  ): void;
  public getRoleCredentials(
    args: GetRoleCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRoleCredentialsCommandOutput) => void
  ): void;
  public getRoleCredentials(
    args: GetRoleCredentialsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRoleCredentialsCommandOutput) => void),
    cb?: (err: any, data?: GetRoleCredentialsCommandOutput) => void
  ): Promise<GetRoleCredentialsCommandOutput> | void {
    const command = new GetRoleCredentialsCommand(args);
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
   * <p>Lists all roles that are assigned to the user for a given Amazon Web Services account.</p>
   */
  public listAccountRoles(
    args: ListAccountRolesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccountRolesCommandOutput>;
  public listAccountRoles(
    args: ListAccountRolesCommandInput,
    cb: (err: any, data?: ListAccountRolesCommandOutput) => void
  ): void;
  public listAccountRoles(
    args: ListAccountRolesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountRolesCommandOutput) => void
  ): void;
  public listAccountRoles(
    args: ListAccountRolesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAccountRolesCommandOutput) => void),
    cb?: (err: any, data?: ListAccountRolesCommandOutput) => void
  ): Promise<ListAccountRolesCommandOutput> | void {
    const command = new ListAccountRolesCommand(args);
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
   * <p>Lists all Amazon Web Services accounts assigned to the user. These Amazon Web Services accounts are assigned by the
   *       administrator of the account. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/useraccess.html#assignusers">Assign User Access</a> in the <i>Amazon Web Services SSO User Guide</i>. This operation
   *       returns a paginated response.</p>
   */
  public listAccounts(
    args: ListAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccountsCommandOutput>;
  public listAccounts(args: ListAccountsCommandInput, cb: (err: any, data?: ListAccountsCommandOutput) => void): void;
  public listAccounts(
    args: ListAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountsCommandOutput) => void
  ): void;
  public listAccounts(
    args: ListAccountsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAccountsCommandOutput) => void),
    cb?: (err: any, data?: ListAccountsCommandOutput) => void
  ): Promise<ListAccountsCommandOutput> | void {
    const command = new ListAccountsCommand(args);
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
   * <p>Removes the locally stored SSO tokens from the client-side cache and sends an API call to
   *       the Amazon Web Services SSO service to invalidate the corresponding server-side Amazon Web Services SSO sign in
   *       session.</p>
   *
   *          <note>
   *             <p>If a user uses Amazon Web Services SSO to access the AWS CLI, the user’s Amazon Web Services SSO sign in session is
   *         used to obtain an IAM session, as specified in the corresponding Amazon Web Services SSO permission set.
   *         More specifically, Amazon Web Services SSO assumes an IAM role in the target account on behalf of the user,
   *         and the corresponding temporary Amazon Web Services credentials are returned to the client.</p>
   *
   *             <p>After user logout, any existing IAM role sessions that were created by using Amazon Web Services SSO
   *         permission sets continue based on the duration configured in the permission set.
   *         For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/authconcept.html">User
   *           authentications</a> in the <i>Amazon Web Services SSO User
   *         Guide</i>.</p>
   *          </note>
   */
  public logout(args: LogoutCommandInput, options?: __HttpHandlerOptions): Promise<LogoutCommandOutput>;
  public logout(args: LogoutCommandInput, cb: (err: any, data?: LogoutCommandOutput) => void): void;
  public logout(
    args: LogoutCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: LogoutCommandOutput) => void
  ): void;
  public logout(
    args: LogoutCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: LogoutCommandOutput) => void),
    cb?: (err: any, data?: LogoutCommandOutput) => void
  ): Promise<LogoutCommandOutput> | void {
    const command = new LogoutCommand(args);
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
