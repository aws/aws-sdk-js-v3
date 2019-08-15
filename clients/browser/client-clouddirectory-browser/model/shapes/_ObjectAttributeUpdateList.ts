import { List as _List_ } from "@aws-sdk/types";
import { _ObjectAttributeUpdate } from "./_ObjectAttributeUpdate";

export const _ObjectAttributeUpdateList: _List_ = {
  type: "list",
  member: {
    shape: _ObjectAttributeUpdate
  }
};
