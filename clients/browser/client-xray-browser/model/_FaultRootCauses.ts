import { List as _List_ } from "@aws-sdk/types";
import { _FaultRootCause } from "./_FaultRootCause";

export const _FaultRootCauses: _List_ = {
  type: "list",
  member: {
    shape: _FaultRootCause
  }
};
