import { List as _List_ } from "@aws-sdk/types";
import { _OptionSpecification } from "./_OptionSpecification";

export const _OptionsSpecifierList: _List_ = {
  type: "list",
  member: {
    shape: _OptionSpecification
  }
};
