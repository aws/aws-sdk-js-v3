import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateQualificationTypeInput: _Structure_ = {
  type: "structure",
  required: ["QualificationTypeId"],
  members: {
    QualificationTypeId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    QualificationTypeStatus: {
      shape: {
        type: "string"
      }
    },
    Test: {
      shape: {
        type: "string"
      }
    },
    AnswerKey: {
      shape: {
        type: "string"
      }
    },
    TestDurationInSeconds: {
      shape: {
        type: "integer"
      }
    },
    RetryDelayInSeconds: {
      shape: {
        type: "integer"
      }
    },
    AutoGranted: {
      shape: {
        type: "boolean"
      }
    },
    AutoGrantedValue: {
      shape: {
        type: "integer"
      }
    }
  }
};
