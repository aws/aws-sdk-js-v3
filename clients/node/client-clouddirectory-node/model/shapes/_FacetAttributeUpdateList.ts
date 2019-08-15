import { List as _List_ } from "@aws-sdk/types";
import { _FacetAttributeUpdate } from "./_FacetAttributeUpdate";

export const _FacetAttributeUpdateList: _List_ = {
  type: "list",
  member: {
    shape: _FacetAttributeUpdate
  }
};
