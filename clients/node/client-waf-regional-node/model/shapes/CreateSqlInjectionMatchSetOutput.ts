import { _SqlInjectionMatchSet } from "./_SqlInjectionMatchSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSqlInjectionMatchSetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SqlInjectionMatchSet: {
      shape: _SqlInjectionMatchSet
    },
    ChangeToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
