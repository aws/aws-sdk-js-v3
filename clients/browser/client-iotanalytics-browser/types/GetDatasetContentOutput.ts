import { _UnmarshalledDatasetEntry } from "./_DatasetEntry";
import { _UnmarshalledDatasetContentStatus } from "./_DatasetContentStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDatasetContentOutput shape
 */
export interface GetDatasetContentOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of "DatasetEntry" objects.</p>
   */
  entries?: Array<_UnmarshalledDatasetEntry>;

  /**
   * <p>The time when the request was made.</p>
   */
  timestamp?: Date;

  /**
   * <p>The status of the data set content.</p>
   */
  status?: _UnmarshalledDatasetContentStatus;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
