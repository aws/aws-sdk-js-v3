import { List as _List_ } from "@aws-sdk/types";
import { _Volume } from "./_Volume";

export const _Volumes: _List_ = {
  type: "list",
  member: {
    shape: _Volume
  }
};
