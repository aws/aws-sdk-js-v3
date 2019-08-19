import { _SolutionConfig } from "./_SolutionConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SolutionVersion: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    solutionVersionArn: {
      shape: {
        type: "string"
      }
    },
    solutionArn: {
      shape: {
        type: "string"
      }
    },
    performHPO: {
      shape: {
        type: "boolean"
      }
    },
    performAutoML: {
      shape: {
        type: "boolean"
      }
    },
    recipeArn: {
      shape: {
        type: "string"
      }
    },
    eventType: {
      shape: {
        type: "string"
      }
    },
    datasetGroupArn: {
      shape: {
        type: "string"
      }
    },
    solutionConfig: {
      shape: _SolutionConfig
    },
    status: {
      shape: {
        type: "string"
      }
    },
    failureReason: {
      shape: {
        type: "string"
      }
    },
    creationDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    lastUpdatedDateTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
