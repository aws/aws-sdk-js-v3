import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProvisionedProductPlanSummary: _Structure_ = {
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
    ProvisionProductName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PlanType: {
      shape: {
        type: "string"
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
