import { _UnmarshalledErrorDetail } from "./_ErrorDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchDeleteConnectionOutput shape
 */
export interface BatchDeleteConnectionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of names of the connection definitions that were successfully deleted.</p>
   */
  Succeeded?: Array<string>;

  /**
   * <p>A map of the names of connections that were not successfully deleted to error details.</p>
   */
  Errors?: { [key: string]: _UnmarshalledErrorDetail };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
