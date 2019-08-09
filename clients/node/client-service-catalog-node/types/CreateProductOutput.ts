import { _UnmarshalledProductViewDetail } from "./_ProductViewDetail";
import { _UnmarshalledProvisioningArtifactDetail } from "./_ProvisioningArtifactDetail";
import { _UnmarshalledTag } from "./_Tag";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateProductOutput shape
 */
export interface CreateProductOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the product view.</p>
   */
  ProductViewDetail?: _UnmarshalledProductViewDetail;

  /**
   * <p>Information about the provisioning artifact.</p>
   */
  ProvisioningArtifactDetail?: _UnmarshalledProvisioningArtifactDetail;

  /**
   * <p>Information about the tags associated with the product.</p>
   */
  Tags?: Array<_UnmarshalledTag>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
