import { List as _List_ } from "@aws-sdk/types";
import { _CelebrityRecognition } from "./_CelebrityRecognition";

export const _CelebrityRecognitions: _List_ = {
  type: "list",
  member: {
    shape: _CelebrityRecognition
  }
};
