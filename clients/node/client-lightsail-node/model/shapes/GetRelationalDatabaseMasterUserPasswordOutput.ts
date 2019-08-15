import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRelationalDatabaseMasterUserPasswordOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    masterUserPassword: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
