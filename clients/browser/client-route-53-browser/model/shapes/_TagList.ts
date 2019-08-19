import { List as _List_ } from "@aws-sdk/types";
import { _Tag } from "./_Tag";

export const _TagList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _Tag,
    locationName: "Tag"
  }
};
