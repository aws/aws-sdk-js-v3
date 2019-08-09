import { List as _List_ } from "@aws-sdk/types";
import { _RobotApplicationConfig } from "./_RobotApplicationConfig";

export const _RobotApplicationConfigs: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _RobotApplicationConfig
  }
};
