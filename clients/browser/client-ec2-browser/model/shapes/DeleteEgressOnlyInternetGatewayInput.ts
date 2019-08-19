import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteEgressOnlyInternetGatewayInput: _Structure_ = {
  type: "structure",
  required: ["EgressOnlyInternetGatewayId"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    EgressOnlyInternetGatewayId: {
      shape: {
        type: "string"
      }
    }
  }
};
