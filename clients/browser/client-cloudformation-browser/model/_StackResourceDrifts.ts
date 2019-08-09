import { List as _List_ } from "@aws-sdk/types";
import { _StackResourceDrift } from "./_StackResourceDrift";

export const _StackResourceDrifts: _List_ = {
  type: "list",
  member: {
    shape: _StackResourceDrift
  }
};
