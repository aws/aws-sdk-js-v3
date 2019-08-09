import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeServiceActionExecutionParametersInput: _Structure_ = {
  type: "structure",
  required: ["ProvisionedProductId", "ServiceActionId"],
  members: {
    ProvisionedProductId: {
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
