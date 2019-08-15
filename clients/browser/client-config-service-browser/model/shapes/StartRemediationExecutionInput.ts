import { _ResourceKeys } from "./_ResourceKeys";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartRemediationExecutionInput: _Structure_ = {
  type: "structure",
  required: ["ConfigRuleName", "ResourceKeys"],
  members: {
    ConfigRuleName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ResourceKeys: {
      shape: _ResourceKeys
    }
  }
};
