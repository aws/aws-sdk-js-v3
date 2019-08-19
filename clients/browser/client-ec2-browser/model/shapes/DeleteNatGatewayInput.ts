import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteNatGatewayInput: _Structure_ = {
  type: "structure",
  required: ["NatGatewayId"],
  members: {
    NatGatewayId: {
      shape: {
        type: "string"
      }
    }
  }
};
