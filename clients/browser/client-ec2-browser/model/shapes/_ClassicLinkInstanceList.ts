import { List as _List_ } from "@aws-sdk/types";
import { _ClassicLinkInstance } from "./_ClassicLinkInstance";

export const _ClassicLinkInstanceList: _List_ = {
  type: "list",
  member: {
    shape: _ClassicLinkInstance,
    locationName: "item"
  }
};
