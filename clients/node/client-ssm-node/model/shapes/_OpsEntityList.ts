import { List as _List_ } from "@aws-sdk/types";
import { _OpsEntity } from "./_OpsEntity";

export const _OpsEntityList: _List_ = {
  type: "list",
  member: {
    shape: _OpsEntity
  }
};
