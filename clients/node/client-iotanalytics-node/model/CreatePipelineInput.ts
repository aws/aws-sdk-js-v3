import { _PipelineActivities } from "./_PipelineActivities";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePipelineInput: _Structure_ = {
  type: "structure",
  required: ["pipelineName", "pipelineActivities"],
  members: {
    pipelineName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    pipelineActivities: {
      shape: _PipelineActivities
    },
    tags: {
      shape: _TagList
    }
  }
};
