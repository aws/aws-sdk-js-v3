import { _Build } from "./_Build";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateBuildOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Build: {
      shape: _Build
    }
  }
};
