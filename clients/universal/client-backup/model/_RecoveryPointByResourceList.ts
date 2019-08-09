import { List as _List_ } from "@aws-sdk/types";
import { _RecoveryPointByResource } from "./_RecoveryPointByResource";

export const _RecoveryPointByResourceList: _List_ = {
  type: "list",
  member: {
    shape: _RecoveryPointByResource
  }
};
