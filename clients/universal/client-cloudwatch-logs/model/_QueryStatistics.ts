import { Structure as _Structure_ } from "@aws-sdk/types";

export const _QueryStatistics: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    recordsMatched: {
      shape: {
        type: "float"
      }
    },
    recordsScanned: {
      shape: {
        type: "float"
      }
    },
    bytesScanned: {
      shape: {
        type: "float"
      }
    }
  }
};
