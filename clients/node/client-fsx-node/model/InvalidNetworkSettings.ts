import { Structure as _Structure_ } from "@aws-sdk/types";

export const InvalidNetworkSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Message: {
      shape: {
        type: "string",
        min: 1
      }
    },
    InvalidSubnetId: {
      shape: {
        type: "string",
        min: 15
      }
    },
    InvalidSecurityGroupId: {
      shape: {
        type: "string",
        min: 11
      }
    }
  },
  exceptionType: "InvalidNetworkSettings"
};
