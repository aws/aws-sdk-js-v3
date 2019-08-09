import { _ActionTargetList } from "./_ActionTargetList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeActionTargetsOutput: _Structure_ = {
  type: "structure",
  required: ["ActionTargets"],
  members: {
    ActionTargets: {
      shape: _ActionTargetList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
