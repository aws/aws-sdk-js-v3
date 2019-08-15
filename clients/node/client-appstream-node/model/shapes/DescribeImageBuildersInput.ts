import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeImageBuildersInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Names: {
      shape: _StringList
    },
    MaxResults: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
