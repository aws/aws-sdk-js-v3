import { List as _List_ } from "@aws-sdk/types";
import { _CatalogEntry } from "./_CatalogEntry";

export const _CatalogEntries: _List_ = {
  type: "list",
  member: {
    shape: _CatalogEntry
  }
};
