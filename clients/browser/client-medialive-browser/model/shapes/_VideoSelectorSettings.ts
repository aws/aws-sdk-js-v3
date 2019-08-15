import { _VideoSelectorPid } from "./_VideoSelectorPid";
import { _VideoSelectorProgramId } from "./_VideoSelectorProgramId";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VideoSelectorSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VideoSelectorPid: {
      shape: _VideoSelectorPid,
      locationName: "videoSelectorPid"
    },
    VideoSelectorProgramId: {
      shape: _VideoSelectorProgramId,
      locationName: "videoSelectorProgramId"
    }
  }
};
