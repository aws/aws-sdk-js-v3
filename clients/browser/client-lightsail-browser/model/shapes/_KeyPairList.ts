import { List as _List_ } from "@aws-sdk/types";
import { _KeyPair } from "./_KeyPair";

export const _KeyPairList: _List_ = {
  type: "list",
  member: {
    shape: _KeyPair
  }
};
