import { List as _List_ } from "@aws-sdk/types";
import { _Location } from "./_Location";

export const _LocationList: _List_ = {
  type: "list",
  member: {
    shape: _Location
  }
};
