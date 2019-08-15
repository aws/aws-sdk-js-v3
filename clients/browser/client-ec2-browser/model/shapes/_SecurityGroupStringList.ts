import { List as _List_ } from "@aws-sdk/types";

export const _SecurityGroupStringList: _List_ = {
  type: "list",
  member: {
    shape: {
      type: "string"
    },
    locationName: "SecurityGroup"
  }
};
