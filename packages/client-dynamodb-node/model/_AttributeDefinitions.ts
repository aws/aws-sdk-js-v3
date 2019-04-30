import { List as _List_ } from "@aws-sdk/types";
import { _AttributeDefinition } from "./_AttributeDefinition";

export const _AttributeDefinitions: _List_ = {
  type: "list",
  member: {
    shape: _AttributeDefinition
  }
};
