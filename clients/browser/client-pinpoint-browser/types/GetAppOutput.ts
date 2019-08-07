import { _UnmarshalledApplicationResponse } from "./_ApplicationResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetAppOutput shape
 */
export interface GetAppOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * Application Response.
   */
  ApplicationResponse: _UnmarshalledApplicationResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
