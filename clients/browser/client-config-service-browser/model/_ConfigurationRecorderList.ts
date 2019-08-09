import { List as _List_ } from "@aws-sdk/types";
import { _ConfigurationRecorder } from "./_ConfigurationRecorder";

export const _ConfigurationRecorderList: _List_ = {
  type: "list",
  member: {
    shape: _ConfigurationRecorder
  }
};
