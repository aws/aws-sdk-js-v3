import { List as _List_ } from "@aws-sdk/types";
import { _FaceDetection } from "./_FaceDetection";

export const _FaceDetections: _List_ = {
  type: "list",
  member: {
    shape: _FaceDetection
  }
};
