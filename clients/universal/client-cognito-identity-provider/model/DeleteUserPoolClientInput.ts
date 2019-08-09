import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteUserPoolClientInput: _Structure_ = {
  type: "structure",
  required: ["UserPoolId", "ClientId"],
  members: {
    UserPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ClientId: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    }
  }
};
