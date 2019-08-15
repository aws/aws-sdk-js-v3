import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Fragment: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FragmentNumber: {
      shape: {
        type: "string",
        min: 1
      }
    },
    FragmentSizeInBytes: {
      shape: {
        type: "integer"
      }
    },
    ProducerTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    ServerTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    FragmentLengthInMilliseconds: {
      shape: {
        type: "integer"
      }
    }
  }
};
