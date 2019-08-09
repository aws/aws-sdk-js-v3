import { List as _List_ } from "@aws-sdk/types";
import { _EntityTypesListItem } from "./_EntityTypesListItem";

export const _EntityTypesList: _List_ = {
  type: "list",
  member: {
    shape: _EntityTypesListItem
  }
};
