import { _ProductViewDetail } from "./_ProductViewDetail";
import { _ProvisioningArtifactDetail } from "./_ProvisioningArtifactDetail";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateProductOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProductViewDetail: {
      shape: _ProductViewDetail
    },
    ProvisioningArtifactDetail: {
      shape: _ProvisioningArtifactDetail
    },
    Tags: {
      shape: _Tags
    }
  }
};
