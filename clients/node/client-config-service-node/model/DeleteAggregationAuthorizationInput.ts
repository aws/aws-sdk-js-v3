import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteAggregationAuthorizationInput: _Structure_ = {
  type: "structure",
  required: ["AuthorizedAccountId", "AuthorizedAwsRegion"],
  members: {
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
    }
  }
};
