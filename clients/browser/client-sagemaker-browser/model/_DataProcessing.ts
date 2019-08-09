import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DataProcessing: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InputFilter: {
      shape: {
        type: "string"
      }
    },
    OutputFilter: {
      shape: {
        type: "string"
      }
    },
    JoinSource: {
      shape: {
        type: "string"
      }
    }
  }
};
