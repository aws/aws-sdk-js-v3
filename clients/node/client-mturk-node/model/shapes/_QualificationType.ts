import { Structure as _Structure_ } from "@aws-sdk/types";

export const _QualificationType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    QualificationTypeId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Keywords: {
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
    TestDurationInSeconds: {
      shape: {
        type: "integer"
      }
    },
    AnswerKey: {
      shape: {
        type: "string"
      }
    },
    RetryDelayInSeconds: {
      shape: {
        type: "integer"
      }
    },
    IsRequestable: {
      shape: {
        type: "boolean"
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
