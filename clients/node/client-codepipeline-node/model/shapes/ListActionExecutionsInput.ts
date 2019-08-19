import { _ActionExecutionFilter } from "./_ActionExecutionFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListActionExecutionsInput: _Structure_ = {
  type: "structure",
  required: ["pipelineName"],
  members: {
    pipelineName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    filter: {
      shape: _ActionExecutionFilter
    },
    maxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
