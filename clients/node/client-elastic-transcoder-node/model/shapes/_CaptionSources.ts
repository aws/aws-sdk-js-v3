import { List as _List_ } from "@aws-sdk/types";
import { _CaptionSource } from "./_CaptionSource";

export const _CaptionSources: _List_ = {
  type: "list",
  member: {
    shape: _CaptionSource
  }
};
