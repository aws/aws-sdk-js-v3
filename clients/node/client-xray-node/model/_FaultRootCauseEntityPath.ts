import { List as _List_ } from "@aws-sdk/types";
import { _FaultRootCauseEntity } from "./_FaultRootCauseEntity";

export const _FaultRootCauseEntityPath: _List_ = {
  type: "list",
  member: {
    shape: _FaultRootCauseEntity
  }
};
