import { _UnmarshalledWorkGroup } from "./_WorkGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetWorkGroupOutput shape
 */
export interface GetWorkGroupOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the workgroup.</p>
   */
  WorkGroup?: _UnmarshalledWorkGroup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
