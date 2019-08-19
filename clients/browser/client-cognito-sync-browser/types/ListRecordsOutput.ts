import { _UnmarshalledRecord } from "./_Record";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * Returned for a successful ListRecordsRequest.
 */
export interface ListRecordsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * A list of all records.
   */
  Records?: Array<_UnmarshalledRecord>;

  /**
   * A pagination token for obtaining the next page of results.
   */
  NextToken?: string;

  /**
   * Total number of records.
   */
  Count?: number;

  /**
   * Server sync count for this dataset.
   */
  DatasetSyncCount?: number;

  /**
   * The user/device that made the last change to this record.
   */
  LastModifiedBy?: string;

  /**
   * Names of merged datasets.
   */
  MergedDatasetNames?: Array<string>;

  /**
   * Indicates whether the dataset exists.
   */
  DatasetExists?: boolean;

  /**
   * A boolean value specifying whether to delete the dataset locally.
   */
  DatasetDeletedAfterRequestedSyncCount?: boolean;

  /**
   * A token containing a session ID, identity ID, and expiration.
   */
  SyncSessionToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
