import { _TagsList } from "./_TagsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceTag: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceId: {
      shape: {
        type: "string"
      }
    },
    TagsList: {
      shape: _TagsList
    }
  }
};
