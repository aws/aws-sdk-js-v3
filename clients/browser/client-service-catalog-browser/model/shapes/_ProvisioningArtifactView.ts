import { _ProductViewSummary } from "./_ProductViewSummary";
import { _ProvisioningArtifact } from "./_ProvisioningArtifact";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProvisioningArtifactView: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProductViewSummary: {
      shape: _ProductViewSummary
    },
    ProvisioningArtifact: {
      shape: _ProvisioningArtifact
    }
  }
};
