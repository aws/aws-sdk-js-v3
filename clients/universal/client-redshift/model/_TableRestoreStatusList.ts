import { List as _List_ } from "@aws-sdk/types";
import { _TableRestoreStatus } from "./_TableRestoreStatus";

export const _TableRestoreStatusList: _List_ = {
  type: "list",
  member: {
    shape: _TableRestoreStatus,
    locationName: "TableRestoreStatus"
  }
};
