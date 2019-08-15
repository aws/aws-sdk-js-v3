import { List as _List_ } from "@aws-sdk/types";
import { _ComparedFace } from "./_ComparedFace";

export const _ComparedFaceList: _List_ = {
  type: "list",
  member: {
    shape: _ComparedFace
  }
};
