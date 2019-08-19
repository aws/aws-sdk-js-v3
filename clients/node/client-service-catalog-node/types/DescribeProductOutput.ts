import { _UnmarshalledProductViewSummary } from "./_ProductViewSummary";
import { _UnmarshalledProvisioningArtifact } from "./_ProvisioningArtifact";
import { _UnmarshalledBudgetDetail } from "./_BudgetDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeProductOutput shape
 */
export interface DescribeProductOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Summary information about the product view.</p>
   */
  ProductViewSummary?: _UnmarshalledProductViewSummary;

  /**
   * <p>Information about the provisioning artifacts for the specified product.</p>
   */
  ProvisioningArtifacts?: Array<_UnmarshalledProvisioningArtifact>;

  /**
   * <p>Information about the associated budgets.</p>
   */
  Budgets?: Array<_UnmarshalledBudgetDetail>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
