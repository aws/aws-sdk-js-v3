import { List as _List_ } from "@aws-sdk/types";
import { _ResourceAttribute } from "./_ResourceAttribute";

export const _LatestResourceAttributeList: _List_ = {
  type: "list",
  member: {
    shape: _ResourceAttribute
  }
};
