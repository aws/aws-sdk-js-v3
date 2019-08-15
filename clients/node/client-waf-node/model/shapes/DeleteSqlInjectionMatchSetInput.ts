import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteSqlInjectionMatchSetInput: _Structure_ = {
  type: "structure",
  required: ["SqlInjectionMatchSetId", "ChangeToken"],
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
    }
  }
};
