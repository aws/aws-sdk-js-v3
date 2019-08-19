import { List as _List_ } from "@aws-sdk/types";
import { _Fleet } from "./_Fleet";

export const _Fleets: _List_ = {
  type: "list",
  member: {
    shape: _Fleet
  }
};
