import { List as _List_ } from "@aws-sdk/types";
import { _RobotDeployment } from "./_RobotDeployment";

export const _RobotDeploymentSummary: _List_ = {
  type: "list",
  member: {
    shape: _RobotDeployment
  }
};
