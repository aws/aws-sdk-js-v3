import { _UnmarshalledSystemInstanceDescription } from "./_SystemInstanceDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetSystemInstanceOutput shape
 */
export interface GetSystemInstanceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object that describes the system instance.</p>
   */
  description?: _UnmarshalledSystemInstanceDescription;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
