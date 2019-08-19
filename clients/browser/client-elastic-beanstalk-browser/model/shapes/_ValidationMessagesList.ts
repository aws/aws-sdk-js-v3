import { List as _List_ } from "@aws-sdk/types";
import { _ValidationMessage } from "./_ValidationMessage";

export const _ValidationMessagesList: _List_ = {
  type: "list",
  member: {
    shape: _ValidationMessage
  }
};
