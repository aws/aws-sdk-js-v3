import { _RemediationConfigurations } from "./_RemediationConfigurations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeRemediationConfigurationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RemediationConfigurations: {
      shape: _RemediationConfigurations
    }
  }
};
