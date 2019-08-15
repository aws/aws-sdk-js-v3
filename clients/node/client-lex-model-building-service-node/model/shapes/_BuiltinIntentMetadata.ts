import { _LocaleList } from "./_LocaleList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BuiltinIntentMetadata: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    signature: {
      shape: {
        type: "string"
      }
    },
    supportedLocales: {
      shape: _LocaleList
    }
  }
};
