import { List as _List_ } from "@aws-sdk/types";
import { _CorsRule } from "./_CorsRule";

export const _CorsPolicy: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _CorsRule
  }
};
