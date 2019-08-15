import { List as _List_ } from "@aws-sdk/types";
import { _Accelerator } from "./_Accelerator";

export const _Accelerators: _List_ = {
  type: "list",
  member: {
    shape: _Accelerator
  }
};
