import { _InstanceProfile } from "./_InstanceProfile";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateInstanceProfileOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    instanceProfile: {
      shape: _InstanceProfile
    }
  }
};
