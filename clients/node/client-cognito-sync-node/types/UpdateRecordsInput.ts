import { _RecordPatch } from "./_RecordPatch";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * A request to post updates to records or add and delete records for a dataset and user.
 */
export interface UpdateRecordsInput {
  /**
   * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
   */
  IdentityPoolId: string;

  /**
   * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
   */
  IdentityId: string;

  /**
   * A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).
   */
  DatasetName: string;

  /**
   * <p>The unique ID generated for this device by Cognito.</p>
   */
  DeviceId?: string;

  /**
   * A list of patch operations.
   */
  RecordPatches?: Array<_RecordPatch> | Iterable<_RecordPatch>;

  /**
   * The SyncSessionToken returned by a previous call to ListRecords for this dataset and identity.
   */
  SyncSessionToken: string;

  /**
   * Intended to supply a device ID that will populate the lastModifiedBy field referenced in other methods. The ClientContext field is not yet implemented.
   */
  ClientContext?: string;

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
