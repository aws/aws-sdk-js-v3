import { _TagsList } from "./_TagsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddTagsInput: _Structure_ = {
  type: "structure",
  required: ["ResourceId"],
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
