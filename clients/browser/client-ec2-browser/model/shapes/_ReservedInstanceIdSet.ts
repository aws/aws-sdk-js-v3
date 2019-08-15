import { List as _List_ } from "@aws-sdk/types";

export const _ReservedInstanceIdSet: _List_ = {
  type: "list",
  member: {
    shape: {
      type: "string"
    },
    locationName: "ReservedInstanceId"
  }
};
