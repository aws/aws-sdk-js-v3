import { List as _List_ } from "@aws-sdk/types";
import { _SupportedOperation } from "./_SupportedOperation";

export const _SupportedOperationList: _List_ = {
  type: "list",
  member: {
    shape: _SupportedOperation,
    locationName: "SupportedOperation"
  }
};
