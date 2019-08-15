import { _TagsToAddList } from "./_TagsToAddList";
import { _VariableTagsList } from "./_VariableTagsList";
import { _CreateRule } from "./_CreateRule";
import { _RetainRule } from "./_RetainRule";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Schedule: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    CopyTags: {
      shape: {
        type: "boolean"
      }
    },
    TagsToAdd: {
      shape: _TagsToAddList
    },
    VariableTags: {
      shape: _VariableTagsList
    },
    CreateRule: {
      shape: _CreateRule
    },
    RetainRule: {
      shape: _RetainRule
    }
  }
};
