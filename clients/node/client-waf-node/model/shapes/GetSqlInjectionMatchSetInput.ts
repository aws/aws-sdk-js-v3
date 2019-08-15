import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSqlInjectionMatchSetInput: _Structure_ = {
  type: "structure",
  required: ["SqlInjectionMatchSetId"],
  members: {
    SqlInjectionMatchSetId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
