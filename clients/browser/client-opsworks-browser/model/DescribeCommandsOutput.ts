import { _Commands } from "./_Commands";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCommandsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Commands: {
      shape: _Commands
    }
  }
};
