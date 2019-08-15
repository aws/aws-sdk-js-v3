import { List as _List_ } from "@aws-sdk/types";
import { _StopRequest } from "./_StopRequest";

export const _StopWorkspaceRequests: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _StopRequest
  }
};
