import { _Predicate } from "./_Predicate";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RuleUpdate: _Structure_ = {
  type: "structure",
  required: ["Action", "Predicate"],
  members: {
    Action: {
      shape: {
        type: "string"
      }
    },
    Predicate: {
      shape: _Predicate
    }
  }
};
