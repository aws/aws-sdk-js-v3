import { _UnmarshalledApplicationsResponse } from "./_ApplicationsResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetAppsOutput shape
 */
export interface GetAppsOutput {
  /**
   * Get Applications Result.
   */
  ApplicationsResponse: _UnmarshalledApplicationsResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
