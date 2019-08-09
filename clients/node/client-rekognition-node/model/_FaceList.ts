import { List as _List_ } from "@aws-sdk/types";
import { _Face } from "./_Face";

export const _FaceList: _List_ = {
  type: "list",
  member: {
    shape: _Face
  }
};
