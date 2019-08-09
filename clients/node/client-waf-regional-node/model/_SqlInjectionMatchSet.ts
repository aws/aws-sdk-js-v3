import { _SqlInjectionMatchTuples } from "./_SqlInjectionMatchTuples";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SqlInjectionMatchSet: _Structure_ = {
  type: "structure",
  required: ["SqlInjectionMatchSetId", "SqlInjectionMatchTuples"],
  members: {
    SqlInjectionMatchSetId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SqlInjectionMatchTuples: {
      shape: _SqlInjectionMatchTuples
    }
  }
};
