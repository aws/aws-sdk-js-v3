import { List as _List_ } from "@aws-sdk/types";
import { _TerminateConnectionStatus } from "./_TerminateConnectionStatus";

export const _TerminateConnectionStatusSet: _List_ = {
  type: "list",
  member: {
    shape: _TerminateConnectionStatus,
    locationName: "item"
  }
};
