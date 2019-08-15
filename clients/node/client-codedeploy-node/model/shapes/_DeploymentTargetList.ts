import { List as _List_ } from "@aws-sdk/types";
import { _DeploymentTarget } from "./_DeploymentTarget";

export const _DeploymentTargetList: _List_ = {
  type: "list",
  member: {
    shape: _DeploymentTarget
  }
};
