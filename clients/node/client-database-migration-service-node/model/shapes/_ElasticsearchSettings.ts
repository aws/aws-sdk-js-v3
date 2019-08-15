import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ElasticsearchSettings: _Structure_ = {
  type: "structure",
  required: ["ServiceAccessRoleArn", "EndpointUri"],
  members: {
    ServiceAccessRoleArn: {
      shape: {
        type: "string"
      }
    },
    EndpointUri: {
      shape: {
        type: "string"
      }
    },
    FullLoadErrorPercentage: {
      shape: {
        type: "integer"
      }
    },
    ErrorRetryDuration: {
      shape: {
        type: "integer"
      }
    }
  }
};
