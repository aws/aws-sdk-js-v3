import { _ProvisioningArtifactInfo } from "./_ProvisioningArtifactInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProvisioningArtifactSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    CreatedTime: {
      shape: {
        type: "timestamp"
      }
    },
    ProvisioningArtifactMetadata: {
      shape: _ProvisioningArtifactInfo
    }
  }
};
