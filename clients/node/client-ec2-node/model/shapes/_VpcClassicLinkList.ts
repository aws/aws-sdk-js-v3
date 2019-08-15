import { List as _List_ } from "@aws-sdk/types";
import { _VpcClassicLink } from "./_VpcClassicLink";

export const _VpcClassicLinkList: _List_ = {
  type: "list",
  member: {
    shape: _VpcClassicLink,
    locationName: "item"
  }
};
