import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteOTAUpdateInput shape
 */
export interface DeleteOTAUpdateInput {
  /**
   * <p>The OTA update ID to delete.</p>
   */
  otaUpdateId: string;

  /**
   * <p>Specifies if the stream associated with an OTA update should be deleted when the OTA update is deleted.</p>
   */
  deleteStream?: boolean;

  /**
   * <p>Specifies if the AWS Job associated with the OTA update should be deleted with the OTA update is deleted.</p>
   */
  forceDeleteAWSJob?: boolean;

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
