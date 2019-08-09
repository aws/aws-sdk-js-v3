import { _UnmarshalledInput } from "./_Input";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * Placeholder documentation for ListInputsResponse
 */
export interface ListInputsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * Placeholder documentation for __listOfInput
   */
  Inputs?: Array<_UnmarshalledInput>;

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
