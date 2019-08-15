import { List as _List_ } from "@aws-sdk/types";
import { _OptionVersion } from "./_OptionVersion";

export const _OptionGroupOptionVersionsList: _List_ = {
  type: "list",
  member: {
    shape: _OptionVersion,
    locationName: "OptionVersion"
  }
};
