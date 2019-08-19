import {
  _ProductViewSummary,
  _UnmarshalledProductViewSummary
} from "./_ProductViewSummary";
import {
  _ProvisioningArtifact,
  _UnmarshalledProvisioningArtifact
} from "./_ProvisioningArtifact";

/**
 * <p>An object that contains summary information about a product view and a provisioning artifact.</p>
 */
export interface _ProvisioningArtifactView {
  /**
   * <p>Summary information about a product view.</p>
   */
  ProductViewSummary?: _ProductViewSummary;

  /**
   * <p>Information about a provisioning artifact. A provisioning artifact is also known as a product version.</p>
   */
  ProvisioningArtifact?: _ProvisioningArtifact;
}

export interface _UnmarshalledProvisioningArtifactView
  extends _ProvisioningArtifactView {
  /**
   * <p>Summary information about a product view.</p>
   */
  ProductViewSummary?: _UnmarshalledProductViewSummary;

  /**
   * <p>Information about a provisioning artifact. A provisioning artifact is also known as a product version.</p>
   */
  ProvisioningArtifact?: _UnmarshalledProvisioningArtifact;
}
