import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PipelineDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ActiveInputAttachmentName: {
      shape: {
        type: "string"
      },
      locationName: "activeInputAttachmentName"
    },
    ActiveInputSwitchActionName: {
      shape: {
        type: "string"
      },
      locationName: "activeInputSwitchActionName"
    },
    PipelineId: {
      shape: {
        type: "string"
      },
      locationName: "pipelineId"
    }
  }
};
