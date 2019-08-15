import { _ProvisioningArtifactDetail } from "./_ProvisioningArtifactDetail";
import { _ProvisioningArtifactInfo } from "./_ProvisioningArtifactInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateProvisioningArtifactOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProvisioningArtifactDetail: {
      shape: _ProvisioningArtifactDetail
    },
    Info: {
      shape: _ProvisioningArtifactInfo
    },
    Status: {
      shape: {
        type: "string"
      }
    }
  }
};
