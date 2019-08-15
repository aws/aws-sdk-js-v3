import { List as _List_ } from "@aws-sdk/types";
import { _TargetDescription } from "./_TargetDescription";

export const _TargetDescriptions: _List_ = {
  type: "list",
  member: {
    shape: _TargetDescription
  }
};
