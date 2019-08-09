import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetClusterCredentialsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DbUser: {
      shape: {
        type: "string"
      }
    },
    DbPassword: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    Expiration: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
