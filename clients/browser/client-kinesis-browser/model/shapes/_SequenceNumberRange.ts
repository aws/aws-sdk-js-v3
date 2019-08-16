import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SequenceNumberRange: _Structure_ = {
  type: "structure",
  required: ["StartingSequenceNumber"],
  members: {
    StartingSequenceNumber: {
      shape: {
        type: "string"
      }
    },
    EndingSequenceNumber: {
      shape: {
        type: "string"
      }
    }
  }
};
