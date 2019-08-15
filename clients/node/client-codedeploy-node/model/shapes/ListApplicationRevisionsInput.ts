import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListApplicationRevisionsInput: _Structure_ = {
  type: "structure",
  required: ["applicationName"],
  members: {
    applicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    sortBy: {
      shape: {
        type: "string"
      }
    },
    sortOrder: {
      shape: {
        type: "string"
      }
    },
    s3Bucket: {
      shape: {
        type: "string"
      }
    },
    s3KeyPrefix: {
      shape: {
        type: "string"
      }
    },
    deployed: {
      shape: {
        type: "string"
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
