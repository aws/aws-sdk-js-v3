import { List as _List_ } from "@aws-sdk/types";
import { _ResponseTimeRootCause } from "./_ResponseTimeRootCause";

export const _ResponseTimeRootCauses: _List_ = {
  type: "list",
  member: {
    shape: _ResponseTimeRootCause
  }
};
