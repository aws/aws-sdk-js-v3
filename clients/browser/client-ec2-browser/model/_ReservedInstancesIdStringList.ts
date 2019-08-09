import { List as _List_ } from "@aws-sdk/types";

export const _ReservedInstancesIdStringList: _List_ = {
  type: "list",
  member: {
    shape: {
      type: "string"
    },
    locationName: "ReservedInstancesId"
  }
};
