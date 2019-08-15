import { List as _List_ } from "@aws-sdk/types";
import { _RebootRequest } from "./_RebootRequest";

export const _RebootWorkspaceRequests: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _RebootRequest
  }
};
