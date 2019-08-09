import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteTrafficMirrorSessionInput: _Structure_ = {
  type: "structure",
  required: ["TrafficMirrorSessionId"],
  members: {
    TrafficMirrorSessionId: {
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
