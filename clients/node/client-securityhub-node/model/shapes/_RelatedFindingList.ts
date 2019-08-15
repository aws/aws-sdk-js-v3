import { List as _List_ } from "@aws-sdk/types";
import { _RelatedFinding } from "./_RelatedFinding";

export const _RelatedFindingList: _List_ = {
  type: "list",
  member: {
    shape: _RelatedFinding
  }
};
