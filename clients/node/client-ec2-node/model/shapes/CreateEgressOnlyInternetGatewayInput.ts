import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateEgressOnlyInternetGatewayInput: _Structure_ = {
  type: "structure",
  required: ["VpcId"],
  members: {
    ClientToken: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    VpcId: {
      shape: {
        type: "string"
      }
    }
  }
};
