import { Structure as _Structure_ } from "@aws-sdk/types";

export const ChangePasswordInput: _Structure_ = {
  type: "structure",
  required: ["PreviousPassword", "ProposedPassword", "AccessToken"],
  members: {
    PreviousPassword: {
      shape: {
        type: "string",
        sensitive: true,
        min: 6
      }
    },
    ProposedPassword: {
      shape: {
        type: "string",
        sensitive: true,
        min: 6
      }
    },
    AccessToken: {
      shape: {
        type: "string",
        sensitive: true
      }
    }
  }
};
