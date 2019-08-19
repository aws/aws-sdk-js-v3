import { _PipelineActivities } from "./_PipelineActivities";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdatePipelineInput: _Structure_ = {
  type: "structure",
  required: ["pipelineName", "pipelineActivities"],
  members: {
    pipelineName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "pipelineName"
    },
    pipelineActivities: {
      shape: _PipelineActivities
    }
  }
};
