import { List as _List_ } from "@aws-sdk/types";
import { _Server } from "./_Server";

export const _ServerList: _List_ = {
  type: "list",
  member: {
    shape: _Server
  }
};
