import { List as _List_ } from "@aws-sdk/types";
import { _JobDefinition } from "./_JobDefinition";

export const _JobDefinitionList: _List_ = {
  type: "list",
  member: {
    shape: _JobDefinition
  }
};
