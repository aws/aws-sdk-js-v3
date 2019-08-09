import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpgradePublishedSchemaInput shape
 */
export interface UpgradePublishedSchemaInput {
  /**
   * <p>The ARN of the development schema with the changes used for the upgrade.</p>
   */
  DevelopmentSchemaArn: string;

  /**
   * <p>The ARN of the published schema to be upgraded.</p>
   */
  PublishedSchemaArn: string;

  /**
   * <p>Identifies the minor version of the published schema that will be created. This parameter is NOT optional.</p>
   */
  MinorVersion: string;

  /**
   * <p>Used for testing whether the Development schema provided is backwards compatible, or not, with the publish schema provided by the user to be upgraded. If schema compatibility fails, an exception would be thrown else the call would succeed. This parameter is optional and defaults to false.</p>
   */
  DryRun?: boolean;

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
