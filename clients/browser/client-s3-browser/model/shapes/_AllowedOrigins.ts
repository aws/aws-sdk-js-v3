import { List as _List_ } from "@aws-sdk/types";

export const _AllowedOrigins: _List_ = {
  type: "list",
  flattened: true,
  member: {
    shape: {
      type: "string"
    }
  }
};
