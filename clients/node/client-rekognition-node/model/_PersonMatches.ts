import { List as _List_ } from "@aws-sdk/types";
import { _PersonMatch } from "./_PersonMatch";

export const _PersonMatches: _List_ = {
  type: "list",
  member: {
    shape: _PersonMatch
  }
};
