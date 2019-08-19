import { List as _List_ } from "@aws-sdk/types";
import { _TextDetection } from "./_TextDetection";

export const _TextDetectionList: _List_ = {
  type: "list",
  member: {
    shape: _TextDetection
  }
};
