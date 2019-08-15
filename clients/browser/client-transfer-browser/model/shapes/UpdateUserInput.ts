import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateUserInput: _Structure_ = {
  type: "structure",
  required: ["ServerId", "UserName"],
  members: {
    HomeDirectory: {
      shape: {
        type: "string"
      }
    },
    Policy: {
      shape: {
        type: "string"
      }
    },
    Role: {
      shape: {
        type: "string"
      }
    },
    ServerId: {
      shape: {
        type: "string"
      }
    },
    UserName: {
      shape: {
        type: "string"
      }
    }
  }
};
