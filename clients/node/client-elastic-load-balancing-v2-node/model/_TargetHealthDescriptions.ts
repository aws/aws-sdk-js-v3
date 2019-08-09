import { List as _List_ } from "@aws-sdk/types";
import { _TargetHealthDescription } from "./_TargetHealthDescription";

export const _TargetHealthDescriptions: _List_ = {
  type: "list",
  member: {
    shape: _TargetHealthDescription
  }
};
