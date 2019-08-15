import { _StreamNameCondition } from "./_StreamNameCondition";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListStreamsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    StreamNameCondition: {
      shape: _StreamNameCondition
    }
  }
};
