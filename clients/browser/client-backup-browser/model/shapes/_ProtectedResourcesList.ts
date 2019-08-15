import { List as _List_ } from "@aws-sdk/types";
import { _ProtectedResource } from "./_ProtectedResource";

export const _ProtectedResourcesList: _List_ = {
  type: "list",
  member: {
    shape: _ProtectedResource
  }
};
