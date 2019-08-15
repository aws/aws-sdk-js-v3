import { List as _List_ } from "@aws-sdk/types";
import { _Listener } from "./_Listener";

export const _Listeners: _List_ = {
  type: "list",
  member: {
    shape: _Listener
  }
};
