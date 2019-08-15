import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ConfigRuleEvaluationStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigRuleName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ConfigRuleArn: {
      shape: {
        type: "string"
      }
    },
    ConfigRuleId: {
      shape: {
        type: "string"
      }
    },
    LastSuccessfulInvocationTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastFailedInvocationTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastSuccessfulEvaluationTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastFailedEvaluationTime: {
      shape: {
        type: "timestamp"
      }
    },
    FirstActivatedTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastErrorCode: {
      shape: {
        type: "string"
      }
    },
    LastErrorMessage: {
      shape: {
        type: "string"
      }
    },
    FirstEvaluationStarted: {
      shape: {
        type: "boolean"
      }
    }
  }
};
