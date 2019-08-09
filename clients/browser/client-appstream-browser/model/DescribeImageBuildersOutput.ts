import { _ImageBuilderList } from "./_ImageBuilderList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeImageBuildersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ImageBuilders: {
      shape: _ImageBuilderList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
