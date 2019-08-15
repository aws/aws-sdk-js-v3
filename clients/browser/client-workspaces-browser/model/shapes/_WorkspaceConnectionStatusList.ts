import { List as _List_ } from "@aws-sdk/types";
import { _WorkspaceConnectionStatus } from "./_WorkspaceConnectionStatus";

export const _WorkspaceConnectionStatusList: _List_ = {
  type: "list",
  member: {
    shape: _WorkspaceConnectionStatus
  }
};
