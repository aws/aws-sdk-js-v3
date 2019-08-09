import { _ContextKeyNamesResultListType } from "./_ContextKeyNamesResultListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetContextKeysForCustomPolicyOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ContextKeyNames: {
      shape: _ContextKeyNamesResultListType
    }
  }
};
