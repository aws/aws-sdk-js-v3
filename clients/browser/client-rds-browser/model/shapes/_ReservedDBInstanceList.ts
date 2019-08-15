import { List as _List_ } from "@aws-sdk/types";
import { _ReservedDBInstance } from "./_ReservedDBInstance";

export const _ReservedDBInstanceList: _List_ = {
  type: "list",
  member: {
    shape: _ReservedDBInstance,
    locationName: "ReservedDBInstance"
  }
};
