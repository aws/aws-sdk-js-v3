import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateProvisioningArtifactInput: _Structure_ = {
  type: "structure",
  required: ["ProductId", "ProvisioningArtifactId"],
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
    ProvisioningArtifactId: {
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
    Active: {
      shape: {
        type: "boolean"
      }
    },
    Guidance: {
      shape: {
        type: "string"
      }
    }
  }
};
