import { _RemediationParameters } from "./_RemediationParameters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RemediationConfiguration: _Structure_ = {
  type: "structure",
  required: ["ConfigRuleName", "TargetType", "TargetId"],
  members: {
    ConfigRuleName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TargetType: {
      shape: {
        type: "string"
      }
    },
    TargetId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TargetVersion: {
      shape: {
        type: "string"
      }
    },
    Parameters: {
      shape: _RemediationParameters
    },
    ResourceType: {
      shape: {
        type: "string"
      }
    }
  }
};
