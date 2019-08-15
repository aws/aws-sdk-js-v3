import { List as _List_ } from "@aws-sdk/types";
import { _InputUpdate } from "./_InputUpdate";

export const _InputUpdates: _List_ = {
  type: "list",
  member: {
    shape: _InputUpdate
  }
};
