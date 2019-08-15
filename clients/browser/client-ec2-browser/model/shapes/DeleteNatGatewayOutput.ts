import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteNatGatewayOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NatGatewayId: {
      shape: {
        type: "string"
      },
      locationName: "natGatewayId"
    }
  }
};
