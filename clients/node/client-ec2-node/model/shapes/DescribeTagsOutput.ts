import { _TagDescriptionList } from "./_TagDescriptionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTagsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    },
    Tags: {
      shape: _TagDescriptionList,
      locationName: "tagSet"
    }
  }
};
