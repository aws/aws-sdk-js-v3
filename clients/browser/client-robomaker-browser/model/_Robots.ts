import { List as _List_ } from "@aws-sdk/types";
import { _Robot } from "./_Robot";

export const _Robots: _List_ = {
  type: "list",
  member: {
    shape: _Robot
  }
};
