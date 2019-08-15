import { List as _List_ } from "@aws-sdk/types";
import { _PhysicalResourceIdContextKeyValuePair } from "./_PhysicalResourceIdContextKeyValuePair";

export const _PhysicalResourceIdContext: _List_ = {
  type: "list",
  member: {
    shape: _PhysicalResourceIdContextKeyValuePair
  }
};
