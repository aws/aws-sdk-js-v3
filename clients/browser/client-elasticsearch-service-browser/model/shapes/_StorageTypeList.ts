import { List as _List_ } from "@aws-sdk/types";
import { _StorageType } from "./_StorageType";

export const _StorageTypeList: _List_ = {
  type: "list",
  member: {
    shape: _StorageType
  }
};
