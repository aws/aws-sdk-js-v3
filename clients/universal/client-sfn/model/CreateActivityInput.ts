import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateActivityInput: _Structure_ = {
  type: "structure",
  required: ["name"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    tags: {
      shape: _TagList
    }
  }
};
