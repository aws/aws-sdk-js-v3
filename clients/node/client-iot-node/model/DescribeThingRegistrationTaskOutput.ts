import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeThingRegistrationTaskOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    taskId: {
      shape: {
        type: "string"
      }
    },
    creationDate: {
      shape: {
        type: "timestamp"
      }
    },
    lastModifiedDate: {
      shape: {
        type: "timestamp"
      }
    },
    templateBody: {
      shape: {
        type: "string"
      }
    },
    inputFileBucket: {
      shape: {
        type: "string",
        min: 3
      }
    },
    inputFileKey: {
      shape: {
        type: "string",
        min: 1
      }
    },
    roleArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    message: {
      shape: {
        type: "string"
      }
    },
    successCount: {
      shape: {
        type: "integer"
      }
    },
    failureCount: {
      shape: {
        type: "integer"
      }
    },
    percentageProgress: {
      shape: {
        type: "integer"
      }
    }
  }
};
