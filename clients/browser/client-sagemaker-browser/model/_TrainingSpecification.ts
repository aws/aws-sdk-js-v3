import { _HyperParameterSpecifications } from "./_HyperParameterSpecifications";
import { _TrainingInstanceTypes } from "./_TrainingInstanceTypes";
import { _MetricDefinitionList } from "./_MetricDefinitionList";
import { _ChannelSpecifications } from "./_ChannelSpecifications";
import { _HyperParameterTuningJobObjectives } from "./_HyperParameterTuningJobObjectives";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TrainingSpecification: _Structure_ = {
  type: "structure",
  required: [
    "TrainingImage",
    "SupportedTrainingInstanceTypes",
    "TrainingChannels"
  ],
  members: {
    TrainingImage: {
      shape: {
        type: "string"
      }
    },
    TrainingImageDigest: {
      shape: {
        type: "string"
      }
    },
    SupportedHyperParameters: {
      shape: _HyperParameterSpecifications
    },
    SupportedTrainingInstanceTypes: {
      shape: _TrainingInstanceTypes
    },
    SupportsDistributedTraining: {
      shape: {
        type: "boolean"
      }
    },
    MetricDefinitions: {
      shape: _MetricDefinitionList
    },
    TrainingChannels: {
      shape: _ChannelSpecifications
    },
    SupportedTuningJobObjectiveMetrics: {
      shape: _HyperParameterTuningJobObjectives
    }
  }
};
