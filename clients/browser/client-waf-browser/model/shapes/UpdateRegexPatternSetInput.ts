import { _RegexPatternSetUpdates } from "./_RegexPatternSetUpdates";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateRegexPatternSetInput: _Structure_ = {
  type: "structure",
  required: ["RegexPatternSetId", "Updates", "ChangeToken"],
  members: {
    RegexPatternSetId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Updates: {
      shape: _RegexPatternSetUpdates
    },
    ChangeToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
