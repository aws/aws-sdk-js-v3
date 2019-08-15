import { List as _List_ } from "@aws-sdk/types";
import { _ServiceRegistry } from "./_ServiceRegistry";

export const _ServiceRegistries: _List_ = {
  type: "list",
  member: {
    shape: _ServiceRegistry
  }
};
