import { _UnmarshalledFailureInfo } from "./_FailureInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * TagResourcesOutput shape
 */
export interface TagResourcesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Details of resources that could not be tagged. An error code, status code, and error message are returned for each failed item.</p>
   */
  FailedResourcesMap?: { [key: string]: _UnmarshalledFailureInfo };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
