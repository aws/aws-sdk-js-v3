import { _StringList } from "./_StringList";
import { _ArnList } from "./_ArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeImagesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Names: {
      shape: _StringList
    },
    Arns: {
      shape: _ArnList
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxResults: {
      shape: {
        type: "integer"
      }
    }
  }
};
