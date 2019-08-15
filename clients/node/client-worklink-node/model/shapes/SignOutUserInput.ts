import { Structure as _Structure_ } from "@aws-sdk/types";

export const SignOutUserInput: _Structure_ = {
  type: "structure",
  required: ["FleetArn", "Username"],
  members: {
    FleetArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    Username: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
