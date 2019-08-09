import { List as _List_ } from "@aws-sdk/types";
import { _NetworkBinding } from "./_NetworkBinding";

export const _NetworkBindings: _List_ = {
  type: "list",
  member: {
    shape: _NetworkBinding
  }
};
