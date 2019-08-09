import { _EgressOnlyInternetGateway } from "./_EgressOnlyInternetGateway";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateEgressOnlyInternetGatewayOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClientToken: {
      shape: {
        type: "string"
      },
      locationName: "clientToken"
    },
    EgressOnlyInternetGateway: {
      shape: _EgressOnlyInternetGateway,
      locationName: "egressOnlyInternetGateway"
    }
  }
};
