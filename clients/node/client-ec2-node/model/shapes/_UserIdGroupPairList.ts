import { List as _List_ } from "@aws-sdk/types";
import { _UserIdGroupPair } from "./_UserIdGroupPair";

export const _UserIdGroupPairList: _List_ = {
  type: "list",
  member: {
    shape: _UserIdGroupPair,
    locationName: "item"
  }
};
