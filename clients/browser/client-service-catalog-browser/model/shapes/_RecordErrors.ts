import { List as _List_ } from "@aws-sdk/types";
import { _RecordError } from "./_RecordError";

export const _RecordErrors: _List_ = {
  type: "list",
  member: {
    shape: _RecordError
  }
};
