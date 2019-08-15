import { _ImageList } from "./_ImageList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeImagesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Images: {
      shape: _ImageList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
