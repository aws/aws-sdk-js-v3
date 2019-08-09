import { _ContextKeyValueListType } from "./_ContextKeyValueListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ContextEntry: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ContextKeyName: {
      shape: {
        type: "string",
        min: 5
      }
    },
    ContextKeyValues: {
      shape: _ContextKeyValueListType
    },
    ContextKeyType: {
      shape: {
        type: "string"
      }
    }
  }
};
