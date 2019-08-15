import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EndpointSummary: _Structure_ = {
  type: "structure",
  required: [
    "EndpointName",
    "EndpointArn",
    "CreationTime",
    "LastModifiedTime",
    "EndpointStatus"
  ],
  members: {
    EndpointName: {
      shape: {
        type: "string"
      }
    },
    EndpointArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastModifiedTime: {
      shape: {
        type: "timestamp"
      }
    },
    EndpointStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
