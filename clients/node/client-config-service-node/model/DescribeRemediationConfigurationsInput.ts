import { _ConfigRuleNames } from "./_ConfigRuleNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeRemediationConfigurationsInput: _Structure_ = {
  type: "structure",
  required: ["ConfigRuleNames"],
  members: {
    ConfigRuleNames: {
      shape: _ConfigRuleNames
    }
  }
};
