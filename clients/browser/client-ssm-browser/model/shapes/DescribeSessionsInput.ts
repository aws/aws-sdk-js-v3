import { _SessionFilterList } from "./_SessionFilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSessionsInput: _Structure_ = {
  type: "structure",
  required: ["State"],
  members: {
    State: {
      shape: {
        type: "string"
      }
    },
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
    Filters: {
      shape: _SessionFilterList
    }
  }
};
