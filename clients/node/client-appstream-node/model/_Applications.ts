import { List as _List_ } from "@aws-sdk/types";
import { _Application } from "./_Application";

export const _Applications: _List_ = {
  type: "list",
  member: {
    shape: _Application
  }
};
