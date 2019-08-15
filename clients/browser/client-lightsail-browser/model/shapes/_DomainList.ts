import { List as _List_ } from "@aws-sdk/types";
import { _Domain } from "./_Domain";

export const _DomainList: _List_ = {
  type: "list",
  member: {
    shape: _Domain
  }
};
