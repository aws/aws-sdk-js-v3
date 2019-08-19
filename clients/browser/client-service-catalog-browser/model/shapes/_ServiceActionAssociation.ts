import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ServiceActionAssociation: _Structure_ = {
  type: "structure",
  required: ["ServiceActionId", "ProductId", "ProvisioningArtifactId"],
  members: {
    ServiceActionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
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
    }
  }
};
