import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateUserOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserId: {
      shape: {
        type: "string"
      }
    },
    UserArn: {
      shape: {
        type: "string"
      }
    }
  }
};
