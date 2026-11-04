// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type GetRoleCredentialsCommandInput,
  type GetRoleCredentialsCommandOutput,
  GetRoleCredentialsCommand,
} from "./commands/GetRoleCredentialsCommand";
import { SSOClient } from "./SSOClient";

const commands = {
  GetRoleCredentialsCommand,
};

/**
 * @public
 */
export interface SSORequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface SSO {
  /**
   * @see {@link GetRoleCredentialsCommand}
   */
  getRoleCredentials(
    args: GetRoleCredentialsCommandInput,
    options?: SSORequestOptions
  ): Promise<GetRoleCredentialsCommandOutput>;
  getRoleCredentials(
    args: GetRoleCredentialsCommandInput,
    cb: (err: any, data?: GetRoleCredentialsCommandOutput) => void
  ): void;
  getRoleCredentials(
    args: GetRoleCredentialsCommandInput,
    options: SSORequestOptions,
    cb: (err: any, data?: GetRoleCredentialsCommandOutput) => void
  ): void;
}

/**
 * AWS IAM Identity Center (successor to AWS Single Sign-On) Portal is a web service that makes it easy for you to assign user access to IAM Identity Center resources such as the AWS access portal. Users can get AWS account applications and roles assigned to them and get federated into the application.
 *
 * > **Note:** Although AWS Single Sign-On was renamed, the `sso` and `identitystore` API namespaces will continue to retain their original name for backward compatibility purposes. For more information, see [IAM Identity Center rename](https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html#renamed).
 *
 * This reference guide describes the IAM Identity Center Portal operations that you can call programatically and includes detailed information on data types and errors.
 *
 * > **Note:** AWS provides SDKs that consist of libraries and sample code for various programming languages and platforms, such as Java, Ruby, .Net, iOS, or Android. The SDKs provide a convenient way to create programmatic access to IAM Identity Center and other AWS services. For more information about the AWS SDKs, including how to download and install them, see [Tools for Amazon Web Services](http://aws.amazon.com/tools/).
 *
 * @public
 */
export class SSO extends SSOClient implements SSO {}
createAggregatedClient(commands, SSO);
