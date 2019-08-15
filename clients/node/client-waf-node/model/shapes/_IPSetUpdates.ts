import { List as _List_ } from "@aws-sdk/types";
import { _IPSetUpdate } from "./_IPSetUpdate";

export const _IPSetUpdates: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _IPSetUpdate
  }
};
