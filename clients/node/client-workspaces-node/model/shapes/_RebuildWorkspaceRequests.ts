import { List as _List_ } from "@aws-sdk/types";
import { _RebuildRequest } from "./_RebuildRequest";

export const _RebuildWorkspaceRequests: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _RebuildRequest
  }
};
