import { List as _List_ } from "@aws-sdk/types";
import { _FaceMatch } from "./_FaceMatch";

export const _FaceMatchList: _List_ = {
  type: "list",
  member: {
    shape: _FaceMatch
  }
};
