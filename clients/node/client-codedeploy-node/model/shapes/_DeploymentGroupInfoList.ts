import { List as _List_ } from "@aws-sdk/types";
import { _DeploymentGroupInfo } from "./_DeploymentGroupInfo";

export const _DeploymentGroupInfoList: _List_ = {
  type: "list",
  member: {
    shape: _DeploymentGroupInfo
  }
};
