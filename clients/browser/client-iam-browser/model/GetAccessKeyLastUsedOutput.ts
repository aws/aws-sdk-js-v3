import { _AccessKeyLastUsed } from "./_AccessKeyLastUsed";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAccessKeyLastUsedOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AccessKeyLastUsed: {
      shape: _AccessKeyLastUsed
    }
  }
};
