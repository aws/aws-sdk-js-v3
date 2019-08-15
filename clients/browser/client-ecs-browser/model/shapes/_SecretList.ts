import { List as _List_ } from "@aws-sdk/types";
import { _Secret } from "./_Secret";

export const _SecretList: _List_ = {
  type: "list",
  member: {
    shape: _Secret
  }
};
