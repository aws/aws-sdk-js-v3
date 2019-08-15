import { List as _List_ } from "@aws-sdk/types";
import { _Voice } from "./_Voice";

export const _VoiceList: _List_ = {
  type: "list",
  member: {
    shape: _Voice
  }
};
