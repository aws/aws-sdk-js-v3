import { List as _List_ } from "@aws-sdk/types";
import { _FaultRootCauseService } from "./_FaultRootCauseService";

export const _FaultRootCauseServices: _List_ = {
  type: "list",
  member: {
    shape: _FaultRootCauseService
  }
};
