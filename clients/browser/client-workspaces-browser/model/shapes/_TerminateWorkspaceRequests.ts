import { List as _List_ } from "@aws-sdk/types";
import { _TerminateRequest } from "./_TerminateRequest";

export const _TerminateWorkspaceRequests: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _TerminateRequest
  }
};
