import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutRecordInput: _Structure_ = {
  type: "structure",
  required: ["StreamName", "Data", "PartitionKey"],
  members: {
    StreamName: {
      shape: {
        type: "string",
        min: 1
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
    ExplicitHashKey: {
      shape: {
        type: "string"
      }
    },
    SequenceNumberForOrdering: {
      shape: {
        type: "string"
      }
    }
  }
};
