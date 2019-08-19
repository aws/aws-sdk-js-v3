import { List as _List_ } from "@aws-sdk/types";
import { _Destination } from "./_Destination";

export const _Destinations: _List_ = {
  type: "list",
  member: {
    shape: _Destination
  }
};
