import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteTrafficMirrorFilterInput: _Structure_ = {
  type: "structure",
  required: ["TrafficMirrorFilterId"],
  members: {
    TrafficMirrorFilterId: {
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
