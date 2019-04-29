import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Record: _Structure_ = {
  type: "structure",
  required: ["SequenceNumber", "Data", "PartitionKey"],
  members: {
    SequenceNumber: {
      shape: {
        type: "string"
      }
    },
    ApproximateArrivalTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    Data: {
      shape: {
        type: "blob"
      }
    },
    PartitionKey: {
      shape: {
        type: "string",
        min: 1
      }
    },
    EncryptionType: {
      shape: {
        type: "string"
      }
    }
  }
};
