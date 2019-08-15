import { _GroupMetadataList } from "./_GroupMetadataList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Groups: {
      shape: _GroupMetadataList
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
