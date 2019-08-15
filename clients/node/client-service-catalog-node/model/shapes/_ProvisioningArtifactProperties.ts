import { _ProvisioningArtifactInfo } from "./_ProvisioningArtifactInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProvisioningArtifactProperties: _Structure_ = {
  type: "structure",
  required: ["Info"],
  members: {
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
    Info: {
      shape: _ProvisioningArtifactInfo
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    DisableTemplateValidation: {
      shape: {
        type: "boolean"
      }
    }
  }
};
