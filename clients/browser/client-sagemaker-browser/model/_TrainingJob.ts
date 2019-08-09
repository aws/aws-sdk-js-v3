import { _ModelArtifacts } from "./_ModelArtifacts";
import { _HyperParameters } from "./_HyperParameters";
import { _AlgorithmSpecification } from "./_AlgorithmSpecification";
import { _InputDataConfig } from "./_InputDataConfig";
import { _OutputDataConfig } from "./_OutputDataConfig";
import { _ResourceConfig } from "./_ResourceConfig";
import { _VpcConfig } from "./_VpcConfig";
import { _StoppingCondition } from "./_StoppingCondition";
import { _SecondaryStatusTransitions } from "./_SecondaryStatusTransitions";
import { _FinalMetricDataList } from "./_FinalMetricDataList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TrainingJob: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TrainingJobName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TrainingJobArn: {
      shape: {
        type: "string"
      }
    },
    TuningJobArn: {
      shape: {
        type: "string"
      }
    },
    LabelingJobArn: {
      shape: {
        type: "string"
      }
    },
    ModelArtifacts: {
      shape: _ModelArtifacts
    },
    TrainingJobStatus: {
      shape: {
        type: "string"
      }
    },
    SecondaryStatus: {
      shape: {
        type: "string"
      }
    },
    FailureReason: {
      shape: {
        type: "string"
      }
    },
    HyperParameters: {
      shape: _HyperParameters
    },
    AlgorithmSpecification: {
      shape: _AlgorithmSpecification
    },
    RoleArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    InputDataConfig: {
      shape: _InputDataConfig
    },
    OutputDataConfig: {
      shape: _OutputDataConfig
    },
    ResourceConfig: {
      shape: _ResourceConfig
    },
    VpcConfig: {
      shape: _VpcConfig
    },
    StoppingCondition: {
      shape: _StoppingCondition
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    TrainingStartTime: {
      shape: {
        type: "timestamp"
      }
    },
    TrainingEndTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastModifiedTime: {
      shape: {
        type: "timestamp"
      }
    },
    SecondaryStatusTransitions: {
      shape: _SecondaryStatusTransitions
    },
    FinalMetricDataList: {
      shape: _FinalMetricDataList
    },
    EnableNetworkIsolation: {
      shape: {
        type: "boolean"
      }
    },
    EnableInterContainerTrafficEncryption: {
      shape: {
        type: "boolean"
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
