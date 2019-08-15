import { List as _List_ } from "@aws-sdk/types";
import { _StorageTypeLimit } from "./_StorageTypeLimit";

export const _StorageTypeLimitList: _List_ = {
  type: "list",
  member: {
    shape: _StorageTypeLimit
  }
};
