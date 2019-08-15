import { List as _List_ } from "@aws-sdk/types";
import { _RdsDbInstance } from "./_RdsDbInstance";

export const _RdsDbInstances: _List_ = {
  type: "list",
  member: {
    shape: _RdsDbInstance
  }
};
