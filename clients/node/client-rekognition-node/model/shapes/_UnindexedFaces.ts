import { List as _List_ } from "@aws-sdk/types";
import { _UnindexedFace } from "./_UnindexedFace";

export const _UnindexedFaces: _List_ = {
  type: "list",
  member: {
    shape: _UnindexedFace
  }
};
