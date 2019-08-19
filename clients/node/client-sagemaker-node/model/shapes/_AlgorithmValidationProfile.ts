import { _TrainingJobDefinition } from "./_TrainingJobDefinition";
import { _TransformJobDefinition } from "./_TransformJobDefinition";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AlgorithmValidationProfile: _Structure_ = {
  type: "structure",
  required: ["ProfileName", "TrainingJobDefinition"],
  members: {
    ProfileName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TrainingJobDefinition: {
      shape: _TrainingJobDefinition
    },
    TransformJobDefinition: {
      shape: _TransformJobDefinition
    }
  }
};
