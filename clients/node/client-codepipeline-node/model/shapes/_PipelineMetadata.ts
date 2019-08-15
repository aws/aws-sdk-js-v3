import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PipelineMetadata: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    pipelineArn: {
      shape: {
        type: "string"
      }
    },
    created: {
      shape: {
        type: "timestamp"
      }
    },
    updated: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
