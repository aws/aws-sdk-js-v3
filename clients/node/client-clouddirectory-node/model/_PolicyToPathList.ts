import { List as _List_ } from "@aws-sdk/types";
import { _PolicyToPath } from "./_PolicyToPath";

export const _PolicyToPathList: _List_ = {
  type: "list",
  member: {
    shape: _PolicyToPath
  }
};
