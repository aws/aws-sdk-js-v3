import { List as _List_ } from "@aws-sdk/types";

export const _UserEmailList: _List_ = {
  type: "list",
  member: {
    shape: {
      type: "string",
      sensitive: true
    }
  }
};
