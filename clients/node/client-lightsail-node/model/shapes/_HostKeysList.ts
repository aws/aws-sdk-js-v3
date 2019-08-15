import { List as _List_ } from "@aws-sdk/types";
import { _HostKeyAttributes } from "./_HostKeyAttributes";

export const _HostKeysList: _List_ = {
  type: "list",
  member: {
    shape: _HostKeyAttributes
  }
};
