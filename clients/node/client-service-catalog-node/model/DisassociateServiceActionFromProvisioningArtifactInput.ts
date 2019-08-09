import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisassociateServiceActionFromProvisioningArtifactInput: _Structure_ = {
  type: "structure",
  required: ["ProductId", "ProvisioningArtifactId", "ServiceActionId"],
  members: {
    ProductId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ProvisioningArtifactId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ServiceActionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AcceptLanguage: {
      shape: {
        type: "string"
      }
    }
  }
};
