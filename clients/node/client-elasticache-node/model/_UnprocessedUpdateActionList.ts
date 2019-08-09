import { List as _List_ } from "@aws-sdk/types";
import { _UnprocessedUpdateAction } from "./_UnprocessedUpdateAction";

export const _UnprocessedUpdateActionList: _List_ = {
  type: "list",
  member: {
    shape: _UnprocessedUpdateAction,
    locationName: "UnprocessedUpdateAction"
  }
};
