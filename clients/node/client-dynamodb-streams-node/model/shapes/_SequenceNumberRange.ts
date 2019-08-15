import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SequenceNumberRange: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StartingSequenceNumber: {
      shape: {
        type: "string",
        min: 21
      }
    },
    EndingSequenceNumber: {
      shape: {
        type: "string",
        min: 21
      }
    }
  }
};
