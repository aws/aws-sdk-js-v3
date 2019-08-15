import { _TagsList } from "./_TagsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutAggregationAuthorizationInput: _Structure_ = {
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
    },
    Tags: {
      shape: _TagsList
    }
  }
};
