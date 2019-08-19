import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteTrafficMirrorFilterRuleInput: _Structure_ = {
  type: "structure",
  required: ["TrafficMirrorFilterRuleId"],
  members: {
    TrafficMirrorFilterRuleId: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
