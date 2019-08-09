import { List as _List_ } from "@aws-sdk/types";
import { _PatchPropertyEntry } from "./_PatchPropertyEntry";

export const _PatchPropertiesList: _List_ = {
  type: "list",
  member: {
    shape: _PatchPropertyEntry
  }
};
