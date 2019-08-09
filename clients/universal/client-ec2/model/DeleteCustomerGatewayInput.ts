import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteCustomerGatewayInput: _Structure_ = {
  type: "structure",
  required: ["CustomerGatewayId"],
  members: {
    CustomerGatewayId: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    }
  }
};
