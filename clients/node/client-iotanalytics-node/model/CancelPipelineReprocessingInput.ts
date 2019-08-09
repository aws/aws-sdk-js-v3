import { Structure as _Structure_ } from "@aws-sdk/types";

export const CancelPipelineReprocessingInput: _Structure_ = {
  type: "structure",
  required: ["pipelineName", "reprocessingId"],
  members: {
    pipelineName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "pipelineName"
    },
    reprocessingId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "reprocessingId"
    }
  }
};
