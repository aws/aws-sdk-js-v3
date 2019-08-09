import { List as _List_ } from "@aws-sdk/types";
import { _QueryStringKeyValuePair } from "./_QueryStringKeyValuePair";

export const _QueryStringKeyValuePairList: _List_ = {
  type: "list",
  member: {
    shape: _QueryStringKeyValuePair
  }
};
