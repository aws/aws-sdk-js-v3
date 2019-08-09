import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteTransitGatewayInput: _Structure_ = {
  type: "structure",
  required: ["TransitGatewayId"],
  members: {
    TransitGatewayId: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
