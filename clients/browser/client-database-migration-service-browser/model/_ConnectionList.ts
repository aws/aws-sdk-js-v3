import { List as _List_ } from "@aws-sdk/types";
import { _Connection } from "./_Connection";

export const _ConnectionList: _List_ = {
  type: "list",
  member: {
    shape: _Connection
  }
};
