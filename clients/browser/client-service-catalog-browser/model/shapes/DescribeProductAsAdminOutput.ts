import { _ProductViewDetail } from "./_ProductViewDetail";
import { _ProvisioningArtifactSummaries } from "./_ProvisioningArtifactSummaries";
import { _Tags } from "./_Tags";
import { _TagOptionDetails } from "./_TagOptionDetails";
import { _Budgets } from "./_Budgets";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeProductAsAdminOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProductViewDetail: {
      shape: _ProductViewDetail
    },
    ProvisioningArtifactSummaries: {
      shape: _ProvisioningArtifactSummaries
    },
    Tags: {
      shape: _Tags
    },
    TagOptions: {
      shape: _TagOptionDetails
    },
    Budgets: {
      shape: _Budgets
    }
  }
};
