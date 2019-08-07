import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProvisionedThroughputDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LastIncreaseDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastDecreaseDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    NumberOfDecreasesToday: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    ReadCapacityUnits: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    WriteCapacityUnits: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
