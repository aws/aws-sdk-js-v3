import { List as _List_ } from "@aws-sdk/types";
import { _StartRequest } from "./_StartRequest";

export const _StartWorkspaceRequests: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _StartRequest
  }
};
