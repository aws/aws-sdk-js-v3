import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeProvisionedProductPlanInput: _Structure_ = {
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
    PageSize: {
      shape: {
        type: "integer"
      }
    },
    PageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
