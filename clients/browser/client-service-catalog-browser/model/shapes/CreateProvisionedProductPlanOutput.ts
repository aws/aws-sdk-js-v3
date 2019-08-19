import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateProvisionedProductPlanOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PlanName: {
      shape: {
        type: "string"
      }
    },
    PlanId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ProvisionProductId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ProvisionedProductName: {
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
