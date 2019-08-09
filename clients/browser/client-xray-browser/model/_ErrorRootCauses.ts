import { List as _List_ } from "@aws-sdk/types";
import { _ErrorRootCause } from "./_ErrorRootCause";

export const _ErrorRootCauses: _List_ = {
  type: "list",
  member: {
    shape: _ErrorRootCause
  }
};
