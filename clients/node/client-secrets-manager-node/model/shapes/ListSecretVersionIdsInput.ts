import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSecretVersionIdsInput: _Structure_ = {
  type: "structure",
  required: ["SecretId"],
  members: {
    SecretId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    IncludeDeprecated: {
      shape: {
        type: "boolean"
      }
    }
  }
};
