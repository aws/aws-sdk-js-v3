import { _pipelineList } from "./_pipelineList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPipelinesOutput: _Structure_ = {
  type: "structure",
  required: ["pipelineIdList"],
  members: {
    pipelineIdList: {
      shape: _pipelineList
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
