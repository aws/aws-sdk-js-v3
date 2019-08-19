import { _RiskConfigurationType } from "./_RiskConfigurationType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeRiskConfigurationOutput: _Structure_ = {
  type: "structure",
  required: ["RiskConfiguration"],
  members: {
    RiskConfiguration: {
      shape: _RiskConfigurationType
    }
  }
};
