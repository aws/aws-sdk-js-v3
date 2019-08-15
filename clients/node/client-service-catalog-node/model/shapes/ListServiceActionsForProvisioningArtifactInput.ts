import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListServiceActionsForProvisioningArtifactInput: _Structure_ = {
  type: "structure",
  required: ["ProductId", "ProvisioningArtifactId"],
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
    PageSize: {
      shape: {
        type: "integer"
      }
    },
    PageToken: {
      shape: {
        type: "string"
      }
    },
    AcceptLanguage: {
      shape: {
        type: "string"
      }
    }
  }
};
