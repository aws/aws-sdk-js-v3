import { _UnmarshalledProductViewSummary } from "./_ProductViewSummary";
import { _UnmarshalledProvisioningArtifact } from "./_ProvisioningArtifact";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeProductViewOutput shape
 */
export interface DescribeProductViewOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Summary information about the product.</p>
   */
  ProductViewSummary?: _UnmarshalledProductViewSummary;

  /**
   * <p>Information about the provisioning artifacts for the product.</p>
   */
  ProvisioningArtifacts?: Array<_UnmarshalledProvisioningArtifact>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
