import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteTrafficMirrorTargetInput: _Structure_ = {
  type: "structure",
  required: ["TrafficMirrorTargetId"],
  members: {
    TrafficMirrorTargetId: {
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
