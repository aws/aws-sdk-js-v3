import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTagsForResourceInput: _Structure_ = {
  type: "structure",
  required: ["ResourceType", "ResourceId"],
  members: {
    ResourceType: {
      shape: {
        type: "string"
      }
    },
    ResourceId: {
      shape: {
        type: "string"
      }
    }
  }
};
