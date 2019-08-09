import { List as _List_ } from "@aws-sdk/types";
import { _ListedServer } from "./_ListedServer";

export const _ListedServers: _List_ = {
  type: "list",
  member: {
    shape: _ListedServer
  }
};
