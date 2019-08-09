import { _TransformEnvironmentMap } from "./_TransformEnvironmentMap";
import { _TransformInput } from "./_TransformInput";
import { _TransformOutput } from "./_TransformOutput";
import { _TransformResources } from "./_TransformResources";
import { _DataProcessing } from "./_DataProcessing";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTransformJobInput: _Structure_ = {
  type: "structure",
  required: [
    "TransformJobName",
    "ModelName",
    "TransformInput",
    "TransformOutput",
    "TransformResources"
  ],
  members: {
    TransformJobName: {
      shape: {
        type: "string",
        min: 1
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
    DataProcessing: {
      shape: _DataProcessing
    },
    Tags: {
      shape: _TagList
    }
  }
};
