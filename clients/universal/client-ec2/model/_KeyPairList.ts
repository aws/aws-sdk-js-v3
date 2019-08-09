import { List as _List_ } from "@aws-sdk/types";
import { _KeyPairInfo } from "./_KeyPairInfo";

export const _KeyPairList: _List_ = {
  type: "list",
  member: {
    shape: _KeyPairInfo,
    locationName: "item"
  }
};
