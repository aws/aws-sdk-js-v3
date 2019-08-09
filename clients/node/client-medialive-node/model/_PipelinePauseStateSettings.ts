import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PipelinePauseStateSettings: _Structure_ = {
  type: "structure",
  required: ["PipelineId"],
  members: {
    PipelineId: {
      shape: {
        type: "string"
      },
      locationName: "pipelineId"
    }
  }
};
