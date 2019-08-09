import { List as _List_ } from "@aws-sdk/types";
import { _Blueprint } from "./_Blueprint";

export const _BlueprintList: _List_ = {
  type: "list",
  member: {
    shape: _Blueprint
  }
};
