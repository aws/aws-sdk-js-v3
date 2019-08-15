import { List as _List_ } from "@aws-sdk/types";
import { _SendDataPoint } from "./_SendDataPoint";

export const _SendDataPointList: _List_ = {
  type: "list",
  member: {
    shape: _SendDataPoint
  }
};
