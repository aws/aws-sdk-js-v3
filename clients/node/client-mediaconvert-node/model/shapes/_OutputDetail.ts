import { _VideoDetail } from "./_VideoDetail";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OutputDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DurationInMs: {
      shape: {
        type: "integer"
      },
      locationName: "durationInMs"
    },
    VideoDetails: {
      shape: _VideoDetail,
      locationName: "videoDetails"
    }
  }
};
