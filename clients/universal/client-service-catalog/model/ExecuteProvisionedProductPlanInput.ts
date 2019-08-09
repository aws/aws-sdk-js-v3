import { Structure as _Structure_ } from "@aws-sdk/types";

export const ExecuteProvisionedProductPlanInput: _Structure_ = {
  type: "structure",
  required: ["PlanId", "IdempotencyToken"],
  members: {
    AcceptLanguage: {
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
    IdempotencyToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
