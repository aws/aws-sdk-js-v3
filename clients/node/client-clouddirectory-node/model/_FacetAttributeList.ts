import { List as _List_ } from "@aws-sdk/types";
import { _FacetAttribute } from "./_FacetAttribute";

export const _FacetAttributeList: _List_ = {
  type: "list",
  member: {
    shape: _FacetAttribute
  }
};
