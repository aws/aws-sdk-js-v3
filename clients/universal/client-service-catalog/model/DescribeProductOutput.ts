import { _ProductViewSummary } from "./_ProductViewSummary";
import { _ProvisioningArtifacts } from "./_ProvisioningArtifacts";
import { _Budgets } from "./_Budgets";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeProductOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProductViewSummary: {
      shape: _ProductViewSummary
    },
    ProvisioningArtifacts: {
      shape: _ProvisioningArtifacts
    },
    Budgets: {
      shape: _Budgets
    }
  }
};
