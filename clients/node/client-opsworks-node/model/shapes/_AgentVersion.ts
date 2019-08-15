import { _StackConfigurationManager } from "./_StackConfigurationManager";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AgentVersion: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Version: {
      shape: {
        type: "string"
      }
    },
    ConfigurationManager: {
      shape: _StackConfigurationManager
    }
  }
};
