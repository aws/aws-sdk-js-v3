import { _ScriptBootstrapActionConfig } from "./_ScriptBootstrapActionConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BootstrapActionConfig: _Structure_ = {
  type: "structure",
  required: ["Name", "ScriptBootstrapAction"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    ScriptBootstrapAction: {
      shape: _ScriptBootstrapActionConfig
    }
  }
};
