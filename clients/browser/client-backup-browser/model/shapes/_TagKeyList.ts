import { List as _List_ } from "@aws-sdk/types";

export const _TagKeyList: _List_ = {
  type: "list",
  sensitive: true,
  member: {
    shape: {
      type: "string"
    }
  }
};
