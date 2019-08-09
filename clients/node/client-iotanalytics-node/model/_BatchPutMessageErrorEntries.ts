import { List as _List_ } from "@aws-sdk/types";
import { _BatchPutMessageErrorEntry } from "./_BatchPutMessageErrorEntry";

export const _BatchPutMessageErrorEntries: _List_ = {
  type: "list",
  member: {
    shape: _BatchPutMessageErrorEntry
  }
};
