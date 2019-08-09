import { _CustomRule } from "./_CustomRule";
import { _AutoBranchCreationConfig } from "./_AutoBranchCreationConfig";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Request structure for update App request. </p>
 */
export interface UpdateAppInput {
  /**
   * <p> Unique Id for an Amplify App. </p>
   */
  appId: string;

  /**
   * <p> Name for an Amplify App. </p>
   */
  name?: string;

  /**
   * <p> Description for an Amplify App. </p>
   */
  description?: string;

  /**
   * <p> Platform for an Amplify App. </p>
   */
  platform?: "WEB" | string;

  /**
   * <p> IAM service role for an Amplify App. </p>
   */
  iamServiceRoleArn?: string;

  /**
   * <p> Environment Variables for an Amplify App. </p>
   */
  environmentVariables?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p> Enables branch auto-building for an Amplify App. </p>
   */
  enableBranchAutoBuild?: boolean;

  /**
   * <p> Enables Basic Authorization for an Amplify App. </p>
   */
  enableBasicAuth?: boolean;

  /**
   * <p> Basic Authorization credentials for an Amplify App. </p>
   */
  basicAuthCredentials?: string;

  /**
   * <p> Custom redirect / rewrite rules for an Amplify App. </p>
   */
  customRules?: Array<_CustomRule> | Iterable<_CustomRule>;

  /**
   * <p> BuildSpec for an Amplify App. </p>
   */
  buildSpec?: string;

  /**
   * <p> Enables automated branch creation for the Amplify App. </p>
   */
  enableAutoBranchCreation?: boolean;

  /**
   * <p> Automated branch creation glob patterns for the Amplify App. </p>
   */
  autoBranchCreationPatterns?: Array<string> | Iterable<string>;

  /**
   * <p> Automated branch creation config for the Amplify App. </p>
   */
  autoBranchCreationConfig?: _AutoBranchCreationConfig;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
