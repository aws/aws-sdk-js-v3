import { List as _List_ } from "@aws-sdk/types";
import { _Step } from "./_Step";

export const _Steps: _List_ = {
  type: "list",
  member: {
    shape: _Step
  }
};
