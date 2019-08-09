import { List as _List_ } from "@aws-sdk/types";
import { _ProcessedUpdateAction } from "./_ProcessedUpdateAction";

export const _ProcessedUpdateActionList: _List_ = {
  type: "list",
  member: {
    shape: _ProcessedUpdateAction,
    locationName: "ProcessedUpdateAction"
  }
};
