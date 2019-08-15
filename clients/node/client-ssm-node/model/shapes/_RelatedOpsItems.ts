import { List as _List_ } from "@aws-sdk/types";
import { _RelatedOpsItem } from "./_RelatedOpsItem";

export const _RelatedOpsItems: _List_ = {
  type: "list",
  member: {
    shape: _RelatedOpsItem
  }
};
