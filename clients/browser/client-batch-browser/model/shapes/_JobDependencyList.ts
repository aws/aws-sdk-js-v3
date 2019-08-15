import { List as _List_ } from "@aws-sdk/types";
import { _JobDependency } from "./_JobDependency";

export const _JobDependencyList: _List_ = {
  type: "list",
  member: {
    shape: _JobDependency
  }
};
