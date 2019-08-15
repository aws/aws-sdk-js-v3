import { List as _List_ } from "@aws-sdk/types";
import { _RelationalDatabaseBlueprint } from "./_RelationalDatabaseBlueprint";

export const _RelationalDatabaseBlueprintList: _List_ = {
  type: "list",
  member: {
    shape: _RelationalDatabaseBlueprint
  }
};
