import { _UnmarshalledProductViewDetail } from "./_ProductViewDetail";
import { _UnmarshalledProvisioningArtifactSummary } from "./_ProvisioningArtifactSummary";
import { _UnmarshalledTag } from "./_Tag";
import { _UnmarshalledTagOptionDetail } from "./_TagOptionDetail";
import { _UnmarshalledBudgetDetail } from "./_BudgetDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeProductAsAdminOutput shape
 */
export interface DescribeProductAsAdminOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the product view.</p>
   */
  ProductViewDetail?: _UnmarshalledProductViewDetail;

  /**
   * <p>Information about the provisioning artifacts (also known as versions) for the specified product.</p>
   */
  ProvisioningArtifactSummaries?: Array<
    _UnmarshalledProvisioningArtifactSummary
  >;

  /**
   * <p>Information about the tags associated with the product.</p>
   */
  Tags?: Array<_UnmarshalledTag>;

  /**
   * <p>Information about the TagOptions associated with the product.</p>
   */
  TagOptions?: Array<_UnmarshalledTagOptionDetail>;

  /**
   * <p>Information about the associated budgets.</p>
   */
  Budgets?: Array<_UnmarshalledBudgetDetail>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
