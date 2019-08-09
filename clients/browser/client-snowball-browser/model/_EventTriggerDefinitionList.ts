import { List as _List_ } from "@aws-sdk/types";
import { _EventTriggerDefinition } from "./_EventTriggerDefinition";

export const _EventTriggerDefinitionList: _List_ = {
  type: "list",
  member: {
    shape: _EventTriggerDefinition
  }
};
