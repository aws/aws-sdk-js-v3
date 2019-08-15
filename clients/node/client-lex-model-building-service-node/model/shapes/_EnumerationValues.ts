import { List as _List_ } from "@aws-sdk/types";
import { _EnumerationValue } from "./_EnumerationValue";

export const _EnumerationValues: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _EnumerationValue
  }
};
