import { List as _List_ } from "@aws-sdk/types";
import { _OptionGroup } from "./_OptionGroup";

export const _OptionGroupsList: _List_ = {
  type: "list",
  member: {
    shape: _OptionGroup,
    locationName: "OptionGroup"
  }
};
