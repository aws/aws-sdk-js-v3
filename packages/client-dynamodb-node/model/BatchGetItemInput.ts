import { _BatchGetRequestMap } from "./_BatchGetRequestMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetItemInput: _Structure_ = {
  type: "structure",
  required: ["RequestItems"],
  members: {
    RequestItems: {
      shape: _BatchGetRequestMap
    },
    ReturnConsumedCapacity: {
      shape: {
        type: "string"
      }
    }
  }
};
