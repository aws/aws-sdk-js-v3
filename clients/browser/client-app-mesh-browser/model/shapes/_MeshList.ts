import { List as _List_ } from "@aws-sdk/types";
import { _MeshRef } from "./_MeshRef";

export const _MeshList: _List_ = {
  type: "list",
  member: {
    shape: _MeshRef
  }
};
