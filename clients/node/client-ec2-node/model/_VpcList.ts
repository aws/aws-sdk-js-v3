import { List as _List_ } from "@aws-sdk/types";
import { _Vpc } from "./_Vpc";

export const _VpcList: _List_ = {
  type: "list",
  member: {
    shape: _Vpc,
    locationName: "item"
  }
};
