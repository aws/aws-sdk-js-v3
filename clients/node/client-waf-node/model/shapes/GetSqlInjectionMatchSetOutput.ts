import { _SqlInjectionMatchSet } from "./_SqlInjectionMatchSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSqlInjectionMatchSetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SqlInjectionMatchSet: {
      shape: _SqlInjectionMatchSet
    }
  }
};
