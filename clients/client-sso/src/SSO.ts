// smithy-typescript generated code
import { createAggregatedClient } from "@aws-sdk/smithy-client";
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
import { SSOClient, SSOClientConfig } from "./SSOClient";

const commands = {
  GetRoleCredentialsCommand,
  ListAccountRolesCommand,
  ListAccountsCommand,
  LogoutCommand,
};

export interface SSO {
  /**
   * @see {@link GetRoleCredentialsCommand}
   */
  getRoleCredentials(
    args: GetRoleCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRoleCredentialsCommandOutput>;
  getRoleCredentials(
    args: GetRoleCredentialsCommandInput,
    cb: (err: any, data?: GetRoleCredentialsCommandOutput) => void
  ): void;
  getRoleCredentials(
    args: GetRoleCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRoleCredentialsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccountRolesCommand}
   */
  listAccountRoles(
    args: ListAccountRolesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccountRolesCommandOutput>;
  listAccountRoles(
    args: ListAccountRolesCommandInput,
    cb: (err: any, data?: ListAccountRolesCommandOutput) => void
  ): void;
  listAccountRoles(
    args: ListAccountRolesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountRolesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccountsCommand}
   */
  listAccounts(args: ListAccountsCommandInput, options?: __HttpHandlerOptions): Promise<ListAccountsCommandOutput>;
  listAccounts(args: ListAccountsCommandInput, cb: (err: any, data?: ListAccountsCommandOutput) => void): void;
  listAccounts(
    args: ListAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountsCommandOutput) => void
  ): void;

  /**
   * @see {@link LogoutCommand}
   */
  logout(args: LogoutCommandInput, options?: __HttpHandlerOptions): Promise<LogoutCommandOutput>;
  logout(args: LogoutCommandInput, cb: (err: any, data?: LogoutCommandOutput) => void): void;
  logout(
    args: LogoutCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: LogoutCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>AWS IAM Identity Center (successor to AWS Single Sign-On) Portal is a web service that makes it easy for you to assign user access to
 *       IAM Identity Center resources such as the AWS access portal. Users can get AWS account applications and roles
 *       assigned to them and get federated into the application.</p>
 *
 *          <note>
 *             <p>Although AWS Single Sign-On was renamed, the <code>sso</code> and
 *           <code>identitystore</code> API namespaces will continue to retain their original name for
 *         backward compatibility purposes. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html#renamed">IAM Identity Center rename</a>.</p>
 *          </note>
 *
 *          <p>This reference guide describes the IAM Identity Center Portal operations that you can call
 *       programatically and includes detailed information on data types and errors.</p>
 *
 *          <note>
 *             <p>AWS provides SDKs that consist of libraries and sample code for various programming
 *         languages and platforms, such as Java, Ruby, .Net, iOS, or Android. The SDKs provide a
 *         convenient way to create programmatic access to IAM Identity Center and other AWS services. For more
 *         information about the AWS SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p>
 *          </note>
 */
export class SSO extends SSOClient implements SSO {}
createAggregatedClient(commands, SSO);
