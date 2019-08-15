import { _User } from "./_User";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetUserOutput: _Structure_ = {
  type: "structure",
  required: ["User"],
  members: {
    User: {
      shape: _User
    }
  }
};
