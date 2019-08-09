import { _SolutionConfig } from "./_SolutionConfig";
import { _AutoMLResult } from "./_AutoMLResult";
import { _SolutionVersionSummary } from "./_SolutionVersionSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Solution: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
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
    datasetGroupArn: {
      shape: {
        type: "string"
      }
    },
    eventType: {
      shape: {
        type: "string"
      }
    },
    solutionConfig: {
      shape: _SolutionConfig
    },
    autoMLResult: {
      shape: _AutoMLResult
    },
    status: {
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
    },
    latestSolutionVersion: {
      shape: _SolutionVersionSummary
    }
  }
};
