import { _NatGateway } from "./_NatGateway";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateNatGatewayOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClientToken: {
      shape: {
        type: "string"
      },
      locationName: "clientToken"
    },
    NatGateway: {
      shape: _NatGateway,
      locationName: "natGateway"
    }
  }
};
