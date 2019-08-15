import { _RegexMatchSetUpdates } from "./_RegexMatchSetUpdates";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateRegexMatchSetInput: _Structure_ = {
  type: "structure",
  required: ["RegexMatchSetId", "Updates", "ChangeToken"],
  members: {
    RegexMatchSetId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Updates: {
      shape: _RegexMatchSetUpdates
    },
    ChangeToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
