import { _TransformEnvironmentMap } from "./_TransformEnvironmentMap";
import { _TransformInput } from "./_TransformInput";
import { _TransformOutput } from "./_TransformOutput";
import { _TransformResources } from "./_TransformResources";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TransformJobDefinition: _Structure_ = {
  type: "structure",
  required: ["TransformInput", "TransformOutput", "TransformResources"],
  members: {
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
    }
  }
};
