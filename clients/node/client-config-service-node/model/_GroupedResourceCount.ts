import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GroupedResourceCount: _Structure_ = {
  type: "structure",
  required: ["GroupName", "ResourceCount"],
  members: {
    GroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ResourceCount: {
      shape: {
        type: "integer"
      }
    }
  }
};
