import { List as _List_ } from "@aws-sdk/types";
import { _PartListElement } from "./_PartListElement";

export const _PartList: _List_ = {
  type: "list",
  member: {
    shape: _PartListElement
  }
};
