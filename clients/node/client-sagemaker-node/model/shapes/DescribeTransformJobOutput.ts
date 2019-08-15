import { _TransformEnvironmentMap } from "./_TransformEnvironmentMap";
import { _TransformInput } from "./_TransformInput";
import { _TransformOutput } from "./_TransformOutput";
import { _TransformResources } from "./_TransformResources";
import { _DataProcessing } from "./_DataProcessing";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTransformJobOutput: _Structure_ = {
  type: "structure",
  required: [
    "TransformJobName",
    "TransformJobArn",
    "TransformJobStatus",
    "ModelName",
    "TransformInput",
    "TransformResources",
    "CreationTime"
  ],
  members: {
    TransformJobName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TransformJobArn: {
      shape: {
        type: "string"
      }
    },
    TransformJobStatus: {
      shape: {
        type: "string"
      }
    },
    FailureReason: {
      shape: {
        type: "string"
      }
    },
    ModelName: {
      shape: {
        type: "string"
      }
    },
    MaxConcurrentTransforms: {
      shape: {
        type: "integer"
      }
    },
    MaxPayloadInMB: {
      shape: {
        type: "integer"
      }
    },
    BatchStrategy: {
      shape: {
        type: "string"
      }
    },
    Environment: {
      shape: _TransformEnvironmentMap
    },
    TransformInput: {
      shape: _TransformInput
    },
    TransformOutput: {
      shape: _TransformOutput
    },
    TransformResources: {
      shape: _TransformResources
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    TransformStartTime: {
      shape: {
        type: "timestamp"
      }
    },
    TransformEndTime: {
      shape: {
        type: "timestamp"
      }
    },
    LabelingJobArn: {
      shape: {
        type: "string"
      }
    },
    DataProcessing: {
      shape: _DataProcessing
    }
  }
};
