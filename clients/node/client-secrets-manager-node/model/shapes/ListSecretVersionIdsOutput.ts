import { _SecretVersionsListType } from "./_SecretVersionsListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSecretVersionIdsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Versions: {
      shape: _SecretVersionsListType
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ARN: {
      shape: {
        type: "string",
        min: 20
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
