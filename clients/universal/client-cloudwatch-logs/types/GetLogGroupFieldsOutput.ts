import { _UnmarshalledLogGroupField } from "./_LogGroupField";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetLogGroupFieldsOutput shape
 */
export interface GetLogGroupFieldsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The array of fields found in the query. Each object in the array contains the name of the field, along with the percentage of time it appeared in the log events that were queried.</p>
   */
  logGroupFields?: Array<_UnmarshalledLogGroupField>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
