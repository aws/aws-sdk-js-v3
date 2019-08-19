import { _SqlInjectionMatchSetUpdates } from "./_SqlInjectionMatchSetUpdates";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateSqlInjectionMatchSetInput: _Structure_ = {
  type: "structure",
  required: ["SqlInjectionMatchSetId", "ChangeToken", "Updates"],
  members: {
    SqlInjectionMatchSetId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ChangeToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Updates: {
      shape: _SqlInjectionMatchSetUpdates
    }
  }
};
