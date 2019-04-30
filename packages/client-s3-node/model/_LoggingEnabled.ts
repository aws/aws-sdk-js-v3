import { _TargetGrants } from "./_TargetGrants";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LoggingEnabled: _Structure_ = {
  type: "structure",
  required: ["TargetBucket", "TargetPrefix"],
  members: {
    TargetBucket: {
      shape: {
        type: "string"
      }
    },
    TargetGrants: {
      shape: _TargetGrants
    },
    TargetPrefix: {
      shape: {
        type: "string"
      }
    }
  }
};
