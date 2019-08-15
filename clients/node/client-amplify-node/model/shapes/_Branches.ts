import { List as _List_ } from "@aws-sdk/types";
import { _Branch } from "./_Branch";

export const _Branches: _List_ = {
  type: "list",
  member: {
    shape: _Branch
  }
};
