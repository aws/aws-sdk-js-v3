import { List as _List_ } from "@aws-sdk/types";
import { _Session } from "./_Session";

export const _SessionList: _List_ = {
  type: "list",
  member: {
    shape: _Session
  }
};
