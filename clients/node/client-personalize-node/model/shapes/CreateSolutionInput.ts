import { _SolutionConfig } from "./_SolutionConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSolutionInput: _Structure_ = {
  type: "structure",
  required: ["name", "datasetGroupArn"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
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
    }
  }
};
