import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AggregationAuthorization: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AggregationAuthorizationArn: {
      shape: {
        type: "string"
      }
    },
    AuthorizedAccountId: {
      shape: {
        type: "string"
      }
    },
    AuthorizedAwsRegion: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
