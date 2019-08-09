import { List as _List_ } from "@aws-sdk/types";
import { _Datum } from "./_Datum";

export const _datumList: _List_ = {
  type: "list",
  member: {
    shape: _Datum
  }
};
