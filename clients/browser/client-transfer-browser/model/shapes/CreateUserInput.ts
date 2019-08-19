import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateUserInput: _Structure_ = {
  type: "structure",
  required: ["Role", "ServerId", "UserName"],
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
    SshPublicKeyBody: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _Tags
    },
    UserName: {
      shape: {
        type: "string"
      }
    }
  }
};
