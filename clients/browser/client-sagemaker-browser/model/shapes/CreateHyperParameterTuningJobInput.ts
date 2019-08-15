import { _HyperParameterTuningJobConfig } from "./_HyperParameterTuningJobConfig";
import { _HyperParameterTrainingJobDefinition } from "./_HyperParameterTrainingJobDefinition";
import { _HyperParameterTuningJobWarmStartConfig } from "./_HyperParameterTuningJobWarmStartConfig";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateHyperParameterTuningJobInput: _Structure_ = {
  type: "structure",
  required: ["HyperParameterTuningJobName", "HyperParameterTuningJobConfig"],
  members: {
    HyperParameterTuningJobName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    HyperParameterTuningJobConfig: {
      shape: _HyperParameterTuningJobConfig
    },
    TrainingJobDefinition: {
      shape: _HyperParameterTrainingJobDefinition
    },
    WarmStartConfig: {
      shape: _HyperParameterTuningJobWarmStartConfig
    },
    Tags: {
      shape: _TagList
    }
  }
};
