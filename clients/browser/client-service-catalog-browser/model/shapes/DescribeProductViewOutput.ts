import { _ProductViewSummary } from "./_ProductViewSummary";
import { _ProvisioningArtifacts } from "./_ProvisioningArtifacts";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeProductViewOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProductViewSummary: {
      shape: _ProductViewSummary
    },
    ProvisioningArtifacts: {
      shape: _ProvisioningArtifacts
    }
  }
};
