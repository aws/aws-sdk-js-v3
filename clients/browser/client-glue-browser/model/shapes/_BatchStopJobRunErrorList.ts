import { List as _List_ } from "@aws-sdk/types";
import { _BatchStopJobRunError } from "./_BatchStopJobRunError";

export const _BatchStopJobRunErrorList: _List_ = {
  type: "list",
  member: {
    shape: _BatchStopJobRunError
  }
};
