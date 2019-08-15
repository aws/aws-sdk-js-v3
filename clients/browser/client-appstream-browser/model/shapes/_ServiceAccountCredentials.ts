import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ServiceAccountCredentials: _Structure_ = {
  type: "structure",
  required: ["AccountName", "AccountPassword"],
  members: {
    AccountName: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    AccountPassword: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    }
  }
};
