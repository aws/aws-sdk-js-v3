import { _RecordingGroup } from "./_RecordingGroup";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ConfigurationRecorder: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    roleARN: {
      shape: {
        type: "string"
      }
    },
    recordingGroup: {
      shape: _RecordingGroup
    }
  }
};
