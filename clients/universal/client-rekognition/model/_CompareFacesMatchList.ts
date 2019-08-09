import { List as _List_ } from "@aws-sdk/types";
import { _CompareFacesMatch } from "./_CompareFacesMatch";

export const _CompareFacesMatchList: _List_ = {
  type: "list",
  member: {
    shape: _CompareFacesMatch
  }
};
