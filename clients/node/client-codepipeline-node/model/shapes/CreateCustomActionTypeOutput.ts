import { _ActionType } from "./_ActionType";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCustomActionTypeOutput: _Structure_ = {
  type: "structure",
  required: ["actionType"],
  members: {
    actionType: {
      shape: _ActionType
    },
    tags: {
      shape: _TagList
    }
  }
};
