import { List as _List_ } from "@aws-sdk/types";
import { _DeploymentApplicationConfig } from "./_DeploymentApplicationConfig";

export const _DeploymentApplicationConfigs: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _DeploymentApplicationConfig
  }
};
