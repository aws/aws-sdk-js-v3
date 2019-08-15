import { List as _List_ } from "@aws-sdk/types";
import { _HttpHeader } from "./_HttpHeader";

export const _HttpHeaderList: _List_ = {
  type: "list",
  member: {
    shape: _HttpHeader
  }
};
