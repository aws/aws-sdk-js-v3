import { _Tag } from "./_Tag";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TaggedResource: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Tag: {
      shape: _Tag
    },
    ResourceName: {
      shape: {
        type: "string"
      }
    },
    ResourceType: {
      shape: {
        type: "string"
      }
    }
  }
};
