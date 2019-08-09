import { _CompromisedCredentialsRiskConfigurationType } from "./_CompromisedCredentialsRiskConfigurationType";
import { _AccountTakeoverRiskConfigurationType } from "./_AccountTakeoverRiskConfigurationType";
import { _RiskExceptionConfigurationType } from "./_RiskExceptionConfigurationType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RiskConfigurationType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ClientId: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    CompromisedCredentialsRiskConfiguration: {
      shape: _CompromisedCredentialsRiskConfigurationType
    },
    AccountTakeoverRiskConfiguration: {
      shape: _AccountTakeoverRiskConfigurationType
    },
    RiskExceptionConfiguration: {
      shape: _RiskExceptionConfigurationType
    },
    LastModifiedDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
