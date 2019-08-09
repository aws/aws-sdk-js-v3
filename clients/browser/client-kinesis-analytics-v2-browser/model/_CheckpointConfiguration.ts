import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CheckpointConfiguration: _Structure_ = {
  type: "structure",
  required: ["ConfigurationType"],
  members: {
    ConfigurationType: {
      shape: {
        type: "string"
      }
    },
    CheckpointingEnabled: {
      shape: {
        type: "boolean"
      }
    },
    CheckpointInterval: {
      shape: {
        type: "integer"
      }
    },
    MinPauseBetweenCheckpoints: {
      shape: {
        type: "integer"
      }
    }
  }
};
