import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A request to UnsubscribeFromDataset.</p>
 */
export interface UnsubscribeFromDatasetInput {
  /**
   * <p>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. The ID of the pool to which this identity belongs.</p>
   */
  IdentityPoolId: string;

  /**
   * <p>Unique ID for this identity.</p>
   */
  IdentityId: string;

  /**
   * <p>The name of the dataset from which to unsubcribe.</p>
   */
  DatasetName: string;

  /**
   * <p>The unique ID generated for this device by Cognito.</p>
   */
  DeviceId: string;

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
