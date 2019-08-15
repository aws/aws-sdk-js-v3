import { _MotionImageInsertionFramerate } from "./_MotionImageInsertionFramerate";
import { _MotionImageInsertionOffset } from "./_MotionImageInsertionOffset";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MotionImageInserter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Framerate: {
      shape: _MotionImageInsertionFramerate,
      locationName: "framerate"
    },
    Input: {
      shape: {
        type: "string",
        min: 14
      },
      locationName: "input"
    },
    InsertionMode: {
      shape: {
        type: "string"
      },
      locationName: "insertionMode"
    },
    Offset: {
      shape: _MotionImageInsertionOffset,
      locationName: "offset"
    },
    Playback: {
      shape: {
        type: "string"
      },
      locationName: "playback"
    },
    StartTime: {
      shape: {
        type: "string",
        min: 11
      },
      locationName: "startTime"
    }
  }
};
