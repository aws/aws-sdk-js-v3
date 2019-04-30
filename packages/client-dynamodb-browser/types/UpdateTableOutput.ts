import { _UnmarshalledTableDescription } from "./_TableDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of an <code>UpdateTable</code> operation.</p>
 */
export interface UpdateTableOutput {
  /**
   * <p>Represents the properties of the table.</p>
   */
  TableDescription?: _UnmarshalledTableDescription;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
