import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CommandPlugin: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 4
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    StatusDetails: {
      shape: {
        type: "string"
      }
    },
    ResponseCode: {
      shape: {
        type: "integer"
      }
    },
    ResponseStartDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    ResponseFinishDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    Output: {
      shape: {
        type: "string"
      }
    },
    StandardOutputUrl: {
      shape: {
        type: "string"
      }
    },
    StandardErrorUrl: {
      shape: {
        type: "string"
      }
    },
    OutputS3Region: {
      shape: {
        type: "string",
        min: 3
      }
    },
    OutputS3BucketName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    OutputS3KeyPrefix: {
      shape: {
        type: "string"
      }
    }
  }
};
