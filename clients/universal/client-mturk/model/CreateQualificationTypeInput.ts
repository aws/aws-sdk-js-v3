import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateQualificationTypeInput: _Structure_ = {
  type: "structure",
  required: ["Name", "Description", "QualificationTypeStatus"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Keywords: {
      shape: {
        type: "string"
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
    RetryDelayInSeconds: {
      shape: {
        type: "integer"
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
