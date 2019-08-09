import { List as _List_ } from "@aws-sdk/types";
import { _MFAOptionType } from "./_MFAOptionType";

export const _MFAOptionListType: _List_ = {
  type: "list",
  member: {
    shape: _MFAOptionType
  }
};
