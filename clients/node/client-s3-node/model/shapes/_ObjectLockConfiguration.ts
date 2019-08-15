import { _ObjectLockRule } from "./_ObjectLockRule";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ObjectLockConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ObjectLockEnabled: {
      shape: {
        type: "string"
      }
    },
    Rule: {
      shape: _ObjectLockRule
    }
  }
};
