import { _UnmarshalledAccelerator } from "./_Accelerator";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListAcceleratorsOutput shape
 */
export interface ListAcceleratorsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of accelerators for a customer account.</p>
   */
  Accelerators?: Array<_UnmarshalledAccelerator>;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
