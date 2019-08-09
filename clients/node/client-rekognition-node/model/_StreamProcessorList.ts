import { List as _List_ } from "@aws-sdk/types";
import { _StreamProcessor } from "./_StreamProcessor";

export const _StreamProcessorList: _List_ = {
  type: "list",
  member: {
    shape: _StreamProcessor
  }
};
