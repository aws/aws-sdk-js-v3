import { List as _List_ } from "@aws-sdk/types";
import { _SourceRegion } from "./_SourceRegion";

export const _SourceRegionList: _List_ = {
  type: "list",
  member: {
    shape: _SourceRegion,
    locationName: "SourceRegion"
  }
};
