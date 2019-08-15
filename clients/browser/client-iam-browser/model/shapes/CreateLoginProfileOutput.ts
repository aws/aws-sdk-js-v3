import { _LoginProfile } from "./_LoginProfile";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateLoginProfileOutput: _Structure_ = {
  type: "structure",
  required: ["LoginProfile"],
  members: {
    LoginProfile: {
      shape: _LoginProfile
    }
  }
};
