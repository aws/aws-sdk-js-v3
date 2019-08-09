import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTagsOutput: _Structure_ = {
  type: "structure",
  required: ["Tags"],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _Tags
    },
    NextMarker: {
      shape: {
        type: "string"
      }
    }
  }
};
