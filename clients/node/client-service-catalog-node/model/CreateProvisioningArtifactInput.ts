import { _ProvisioningArtifactProperties } from "./_ProvisioningArtifactProperties";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateProvisioningArtifactInput: _Structure_ = {
  type: "structure",
  required: ["ProductId", "Parameters", "IdempotencyToken"],
  members: {
    AcceptLanguage: {
      shape: {
        type: "string"
      }
    },
    ProductId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Parameters: {
      shape: _ProvisioningArtifactProperties
    },
    IdempotencyToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
