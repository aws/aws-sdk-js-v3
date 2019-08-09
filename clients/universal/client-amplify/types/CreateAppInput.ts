import { _CustomRule } from "./_CustomRule";
import { _AutoBranchCreationConfig } from "./_AutoBranchCreationConfig";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Request structure used to create Apps in Amplify. </p>
 */
export interface CreateAppInput {
  /**
   * <p> Name for the Amplify App </p>
   */
  name: string;

  /**
   * <p> Description for an Amplify App </p>
   */
  description?: string;

  /**
   * <p> Repository for an Amplify App </p>
   */
  repository?: string;

  /**
   * <p> Platform / framework for an Amplify App </p>
   */
  platform?: "WEB" | string;

  /**
   * <p> AWS IAM service role for an Amplify App </p>
   */
  iamServiceRoleArn?: string;

  /**
   * <p> OAuth token for 3rd party source control system for an Amplify App, used to create webhook and read-only deploy key. OAuth token is not stored. </p>
   */
  oauthToken?: string;

  /**
   * <p> Personal Access token for 3rd party source control system for an Amplify App, used to create webhook and read-only deploy key. Token is not stored. </p>
   */
  accessToken?: string;

  /**
   * <p> Environment variables map for an Amplify App. </p>
   */
  environmentVariables?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p> Enable the auto building of branches for an Amplify App. </p>
   */
  enableBranchAutoBuild?: boolean;

  /**
   * <p> Enable Basic Authorization for an Amplify App, this will apply to all branches part of this App. </p>
   */
  enableBasicAuth?: boolean;

  /**
   * <p> Credentials for Basic Authorization for an Amplify App. </p>
   */
  basicAuthCredentials?: string;

  /**
   * <p> Custom rewrite / redirect rules for an Amplify App. </p>
   */
  customRules?: Array<_CustomRule> | Iterable<_CustomRule>;

  /**
   * <p> Tag for an Amplify App </p>
   */
  tags?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p> BuildSpec for an Amplify App </p>
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
