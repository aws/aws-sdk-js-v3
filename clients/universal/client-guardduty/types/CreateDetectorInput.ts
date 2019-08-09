import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateDetectorInput shape
 */
export interface CreateDetectorInput {
  /**
   * <p>A boolean value that specifies whether the detector is to be enabled.</p>
   */
  Enable: boolean;

  /**
   * <p>The idempotency token for the create request.</p>
   */
  ClientToken?: string;

  /**
   * <p>A enum value that specifies how frequently customer got Finding updates published.</p>
   */
  FindingPublishingFrequency?:
    | "FIFTEEN_MINUTES"
    | "ONE_HOUR"
    | "SIX_HOURS"
    | string;

  /**
   * <p>The tags to be added to a new detector resource.</p>
   */
  Tags?: { [key: string]: string } | Iterable<[string, string]>;

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
