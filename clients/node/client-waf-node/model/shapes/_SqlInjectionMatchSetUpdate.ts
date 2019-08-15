import { _SqlInjectionMatchTuple } from "./_SqlInjectionMatchTuple";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SqlInjectionMatchSetUpdate: _Structure_ = {
  type: "structure",
  required: ["Action", "SqlInjectionMatchTuple"],
  members: {
    Action: {
      shape: {
        type: "string"
      }
    },
    SqlInjectionMatchTuple: {
      shape: _SqlInjectionMatchTuple
    }
  }
};
