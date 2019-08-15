import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateNatGatewayInput: _Structure_ = {
  type: "structure",
  required: ["AllocationId", "SubnetId"],
  members: {
    AllocationId: {
      shape: {
        type: "string"
      }
    },
    ClientToken: {
      shape: {
        type: "string"
      }
    },
    SubnetId: {
      shape: {
        type: "string"
      }
    }
  }
};
