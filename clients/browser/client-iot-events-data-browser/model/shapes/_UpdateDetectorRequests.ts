import { List as _List_ } from "@aws-sdk/types";
import { _UpdateDetectorRequest } from "./_UpdateDetectorRequest";

export const _UpdateDetectorRequests: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _UpdateDetectorRequest
  }
};
