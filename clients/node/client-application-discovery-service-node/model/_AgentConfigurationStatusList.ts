import { List as _List_ } from "@aws-sdk/types";
import { _AgentConfigurationStatus } from "./_AgentConfigurationStatus";

export const _AgentConfigurationStatusList: _List_ = {
  type: "list",
  member: {
    shape: _AgentConfigurationStatus
  }
};
