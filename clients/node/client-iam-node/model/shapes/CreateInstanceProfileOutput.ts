import { _InstanceProfile } from "./_InstanceProfile";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateInstanceProfileOutput: _Structure_ = {
  type: "structure",
  required: ["InstanceProfile"],
  members: {
    InstanceProfile: {
      shape: _InstanceProfile
    }
  }
};
