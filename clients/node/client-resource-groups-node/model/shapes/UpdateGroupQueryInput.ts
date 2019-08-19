import { _ResourceQuery } from "./_ResourceQuery";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateGroupQueryInput: _Structure_ = {
  type: "structure",
  required: ["GroupName", "ResourceQuery"],
  members: {
    GroupName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "GroupName"
    },
    ResourceQuery: {
      shape: _ResourceQuery
    }
  }
};
