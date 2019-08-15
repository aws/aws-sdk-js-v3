import { _ResourceDetails } from "./_ResourceDetails";
import { _ResourceUtilization } from "./_ResourceUtilization";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TargetInstance: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EstimatedMonthlyCost: {
      shape: {
        type: "string"
      }
    },
    EstimatedMonthlySavings: {
      shape: {
        type: "string"
      }
    },
    CurrencyCode: {
      shape: {
        type: "string"
      }
    },
    DefaultTargetInstance: {
      shape: {
        type: "boolean"
      }
    },
    ResourceDetails: {
      shape: _ResourceDetails
    },
    ExpectedResourceUtilization: {
      shape: _ResourceUtilization
    }
  }
};
