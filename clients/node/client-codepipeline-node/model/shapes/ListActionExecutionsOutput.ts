import { _ActionExecutionDetailList } from "./_ActionExecutionDetailList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListActionExecutionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    actionExecutionDetails: {
      shape: _ActionExecutionDetailList
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
