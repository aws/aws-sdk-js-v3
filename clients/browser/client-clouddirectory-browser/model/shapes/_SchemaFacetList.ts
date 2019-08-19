import { List as _List_ } from "@aws-sdk/types";
import { _SchemaFacet } from "./_SchemaFacet";

export const _SchemaFacetList: _List_ = {
  type: "list",
  member: {
    shape: _SchemaFacet
  }
};
