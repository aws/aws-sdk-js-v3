import { List as _List_ } from "@aws-sdk/types";
import { _Finding } from "./_Finding";

export const _Findings: _List_ = {
  type: "list",
  member: {
    shape: _Finding
  }
};
