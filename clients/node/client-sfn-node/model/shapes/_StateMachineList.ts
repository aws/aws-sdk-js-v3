import { List as _List_ } from "@aws-sdk/types";
import { _StateMachineListItem } from "./_StateMachineListItem";

export const _StateMachineList: _List_ = {
  type: "list",
  member: {
    shape: _StateMachineListItem
  }
};
