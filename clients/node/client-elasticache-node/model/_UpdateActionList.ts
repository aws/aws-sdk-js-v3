import { List as _List_ } from "@aws-sdk/types";
import { _UpdateAction } from "./_UpdateAction";

export const _UpdateActionList: _List_ = {
  type: "list",
  member: {
    shape: _UpdateAction,
    locationName: "UpdateAction"
  }
};
