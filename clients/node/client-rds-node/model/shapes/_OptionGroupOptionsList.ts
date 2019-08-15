import { List as _List_ } from "@aws-sdk/types";
import { _OptionGroupOption } from "./_OptionGroupOption";

export const _OptionGroupOptionsList: _List_ = {
  type: "list",
  member: {
    shape: _OptionGroupOption,
    locationName: "OptionGroupOption"
  }
};
