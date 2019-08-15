import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CheckpointConfigurationUpdate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigurationTypeUpdate: {
      shape: {
        type: "string"
      }
    },
    CheckpointingEnabledUpdate: {
      shape: {
        type: "boolean"
      }
    },
    CheckpointIntervalUpdate: {
      shape: {
        type: "integer"
      }
    },
    MinPauseBetweenCheckpointsUpdate: {
      shape: {
        type: "integer"
      }
    }
  }
};
