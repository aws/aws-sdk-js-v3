import { _PatchFilterList } from "./_PatchFilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PatchFilterGroup: _Structure_ = {
  type: "structure",
  required: ["PatchFilters"],
  members: {
    PatchFilters: {
      shape: _PatchFilterList
    }
  }
};
