import { List as _List_ } from "@aws-sdk/types";
import { _DBInstanceStatusInfo } from "./_DBInstanceStatusInfo";

export const _DBInstanceStatusInfoList: _List_ = {
  type: "list",
  member: {
    shape: _DBInstanceStatusInfo,
    locationName: "DBInstanceStatusInfo"
  }
};
