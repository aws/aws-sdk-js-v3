import { List as _List_ } from "@aws-sdk/types";
import { _GroupDefinition } from "./_GroupDefinition";

export const _GroupDefinitions: _List_ = {
  type: "list",
  member: {
    shape: _GroupDefinition
  }
};
