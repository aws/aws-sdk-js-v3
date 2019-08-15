import { _Build } from "./_Build";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopBuildOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    build: {
      shape: _Build
    }
  }
};
