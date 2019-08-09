import { List as _List_ } from "@aws-sdk/types";
import { _Activity } from "./_Activity";

export const _UserActivities: _List_ = {
  type: "list",
  member: {
    shape: _Activity
  }
};
