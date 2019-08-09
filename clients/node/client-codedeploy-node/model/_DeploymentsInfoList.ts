import { List as _List_ } from "@aws-sdk/types";
import { _DeploymentInfo } from "./_DeploymentInfo";

export const _DeploymentsInfoList: _List_ = {
  type: "list",
  member: {
    shape: _DeploymentInfo
  }
};
