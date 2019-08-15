import { _ImageDetailList } from "./_ImageDetailList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeImagesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    imageDetails: {
      shape: _ImageDetailList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
