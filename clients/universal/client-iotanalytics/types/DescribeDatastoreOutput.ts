import { _UnmarshalledDatastore } from "./_Datastore";
import { _UnmarshalledDatastoreStatistics } from "./_DatastoreStatistics";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeDatastoreOutput shape
 */
export interface DescribeDatastoreOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the data store.</p>
   */
  datastore?: _UnmarshalledDatastore;

  /**
   * <p>Additional statistical information about the data store. Included if the 'includeStatistics' parameter is set to true in the request.</p>
   */
  statistics?: _UnmarshalledDatastoreStatistics;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
