import { List as _List_ } from "@aws-sdk/types";
import { _WorkspaceRequest } from "./_WorkspaceRequest";

export const _WorkspaceRequestList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _WorkspaceRequest
  }
};
