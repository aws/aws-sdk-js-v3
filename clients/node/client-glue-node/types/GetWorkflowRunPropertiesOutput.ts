import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetWorkflowRunPropertiesOutput shape
 */
export interface GetWorkflowRunPropertiesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The workflow run properties which were set during the specified run.</p>
   */
  RunProperties?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
