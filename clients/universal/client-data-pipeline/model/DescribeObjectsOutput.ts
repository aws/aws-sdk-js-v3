import { _PipelineObjectList } from "./_PipelineObjectList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeObjectsOutput: _Structure_ = {
  type: "structure",
  required: ["pipelineObjects"],
  members: {
    pipelineObjects: {
      shape: _PipelineObjectList
    },
    marker: {
      shape: {
        type: "string"
      }
    },
    hasMoreResults: {
      shape: {
        type: "boolean"
      }
    }
  }
};
