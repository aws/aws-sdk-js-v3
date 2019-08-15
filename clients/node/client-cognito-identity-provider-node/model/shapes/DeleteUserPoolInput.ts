import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteUserPoolInput: _Structure_ = {
  type: "structure",
  required: ["UserPoolId"],
  members: {
    UserPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
