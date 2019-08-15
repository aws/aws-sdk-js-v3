import { _ResourceQuery } from "./_ResourceQuery";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GroupQuery: _Structure_ = {
  type: "structure",
  required: ["GroupName", "ResourceQuery"],
  members: {
    GroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ResourceQuery: {
      shape: _ResourceQuery
    }
  }
};
