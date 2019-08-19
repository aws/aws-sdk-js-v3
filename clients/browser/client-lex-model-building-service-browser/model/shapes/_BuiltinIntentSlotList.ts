import { List as _List_ } from "@aws-sdk/types";
import { _BuiltinIntentSlot } from "./_BuiltinIntentSlot";

export const _BuiltinIntentSlotList: _List_ = {
  type: "list",
  member: {
    shape: _BuiltinIntentSlot
  }
};
