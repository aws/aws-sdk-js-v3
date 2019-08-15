import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CopyOptionGroupInput: _Structure_ = {
  type: "structure",
  required: [
    "SourceOptionGroupIdentifier",
    "TargetOptionGroupIdentifier",
    "TargetOptionGroupDescription"
  ],
  members: {
    SourceOptionGroupIdentifier: {
      shape: {
        type: "string"
      }
    },
    TargetOptionGroupIdentifier: {
      shape: {
        type: "string"
      }
    },
    TargetOptionGroupDescription: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
