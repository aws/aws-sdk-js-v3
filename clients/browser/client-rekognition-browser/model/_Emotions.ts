import { List as _List_ } from "@aws-sdk/types";
import { _Emotion } from "./_Emotion";

export const _Emotions: _List_ = {
  type: "list",
  member: {
    shape: _Emotion
  }
};
