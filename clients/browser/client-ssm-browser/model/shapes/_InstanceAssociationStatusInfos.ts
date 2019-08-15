import { List as _List_ } from "@aws-sdk/types";
import { _InstanceAssociationStatusInfo } from "./_InstanceAssociationStatusInfo";

export const _InstanceAssociationStatusInfos: _List_ = {
  type: "list",
  member: {
    shape: _InstanceAssociationStatusInfo
  }
};
