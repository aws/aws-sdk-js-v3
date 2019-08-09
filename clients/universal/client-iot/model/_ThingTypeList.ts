import { List as _List_ } from "@aws-sdk/types";
import { _ThingTypeDefinition } from "./_ThingTypeDefinition";

export const _ThingTypeList: _List_ = {
  type: "list",
  member: {
    shape: _ThingTypeDefinition
  }
};
