import { List as _List_ } from "@aws-sdk/types";
import { _KeyValuePair } from "./_KeyValuePair";

export const _AttachmentDetails: _List_ = {
  type: "list",
  member: {
    shape: _KeyValuePair
  }
};
