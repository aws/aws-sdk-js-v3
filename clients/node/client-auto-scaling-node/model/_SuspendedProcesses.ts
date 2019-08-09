import { List as _List_ } from "@aws-sdk/types";
import { _SuspendedProcess } from "./_SuspendedProcess";

export const _SuspendedProcesses: _List_ = {
  type: "list",
  member: {
    shape: _SuspendedProcess
  }
};
