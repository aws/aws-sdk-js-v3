import { _LocaleList } from "./_LocaleList";
import { _BuiltinIntentSlotList } from "./_BuiltinIntentSlotList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBuiltinIntentOutput: _Structure_ = {
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
    },
    slots: {
      shape: _BuiltinIntentSlotList
    }
  }
};
