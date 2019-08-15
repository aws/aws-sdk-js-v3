import { List as _List_ } from "@aws-sdk/types";
import { _DBInstance } from "./_DBInstance";

export const _DBInstanceList: _List_ = {
  type: "list",
  member: {
    shape: _DBInstance,
    locationName: "DBInstance"
  }
};
