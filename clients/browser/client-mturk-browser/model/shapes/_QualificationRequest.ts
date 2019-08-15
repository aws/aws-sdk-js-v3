import { Structure as _Structure_ } from "@aws-sdk/types";

export const _QualificationRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    QualificationRequestId: {
      shape: {
        type: "string"
      }
    },
    QualificationTypeId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    WorkerId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Test: {
      shape: {
        type: "string"
      }
    },
    Answer: {
      shape: {
        type: "string"
      }
    },
    SubmitTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
