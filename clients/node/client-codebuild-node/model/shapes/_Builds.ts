import { List as _List_ } from "@aws-sdk/types";
import { _Build } from "./_Build";

export const _Builds: _List_ = {
  type: "list",
  member: {
    shape: _Build
  }
};
