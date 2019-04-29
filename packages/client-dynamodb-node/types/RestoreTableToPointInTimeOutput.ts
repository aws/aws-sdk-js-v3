import { _UnmarshalledTableDescription } from "./_TableDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RestoreTableToPointInTimeOutput shape
 */
export interface RestoreTableToPointInTimeOutput {
  /**
   * <p>Represents the properties of a table.</p>
   */
  TableDescription?: _UnmarshalledTableDescription;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
