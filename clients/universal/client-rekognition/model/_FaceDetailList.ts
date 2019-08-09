import { List as _List_ } from "@aws-sdk/types";
import { _FaceDetail } from "./_FaceDetail";

export const _FaceDetailList: _List_ = {
  type: "list",
  member: {
    shape: _FaceDetail
  }
};
