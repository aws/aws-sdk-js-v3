import { List as _List_ } from "@aws-sdk/types";
import { _RemoteAccessSession } from "./_RemoteAccessSession";

export const _RemoteAccessSessions: _List_ = {
  type: "list",
  member: {
    shape: _RemoteAccessSession
  }
};
