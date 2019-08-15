import { List as _List_ } from "@aws-sdk/types";
import { _DatasetContentDeliveryRule } from "./_DatasetContentDeliveryRule";

export const _DatasetContentDeliveryRules: _List_ = {
  type: "list",
  member: {
    shape: _DatasetContentDeliveryRule
  }
};
