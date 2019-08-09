import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateResourceGroupOutput shape
 */
export interface CreateResourceGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN that specifies the resource group that is created.</p>
   */
  resourceGroupArn: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
