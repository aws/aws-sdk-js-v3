import { _TaggedResourceList } from "./_TaggedResourceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTagsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TaggedResources: {
      shape: _TaggedResourceList
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
