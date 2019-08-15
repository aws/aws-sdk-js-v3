import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteProvisionedProductPlanInput: _Structure_ = {
  type: "structure",
  required: ["PlanId"],
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
    IgnoreErrors: {
      shape: {
        type: "boolean"
      }
    }
  }
};
