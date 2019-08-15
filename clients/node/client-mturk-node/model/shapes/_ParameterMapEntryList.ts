import { List as _List_ } from "@aws-sdk/types";
import { _ParameterMapEntry } from "./_ParameterMapEntry";

export const _ParameterMapEntryList: _List_ = {
  type: "list",
  member: {
    shape: _ParameterMapEntry
  }
};
