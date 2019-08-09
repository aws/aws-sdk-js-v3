import { List as _List_ } from "@aws-sdk/types";
import { _ByoipCidr } from "./_ByoipCidr";

export const _ByoipCidrSet: _List_ = {
  type: "list",
  member: {
    shape: _ByoipCidr,
    locationName: "item"
  }
};
