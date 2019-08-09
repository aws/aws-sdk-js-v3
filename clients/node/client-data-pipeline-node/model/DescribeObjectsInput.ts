import { _idList } from "./_idList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeObjectsInput: _Structure_ = {
  type: "structure",
  required: ["pipelineId", "objectIds"],
  members: {
    pipelineId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    objectIds: {
      shape: _idList
    },
    evaluateExpressions: {
      shape: {
        type: "boolean"
      }
    },
    marker: {
      shape: {
        type: "string"
      }
    }
  }
};
