import { _Build } from "./_Build";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartBuildOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    build: {
      shape: _Build
    }
  }
};
