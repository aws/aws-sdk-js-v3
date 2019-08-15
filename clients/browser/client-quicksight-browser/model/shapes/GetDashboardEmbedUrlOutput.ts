import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDashboardEmbedUrlOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EmbedUrl: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    Status: {
      shape: {
        type: "integer"
      },
      location: "statusCode"
    },
    RequestId: {
      shape: {
        type: "string"
      }
    }
  }
};
