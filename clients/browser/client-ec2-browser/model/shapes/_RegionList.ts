import { List as _List_ } from "@aws-sdk/types";
import { _Region } from "./_Region";

export const _RegionList: _List_ = {
  type: "list",
  member: {
    shape: _Region,
    locationName: "item"
  }
};
