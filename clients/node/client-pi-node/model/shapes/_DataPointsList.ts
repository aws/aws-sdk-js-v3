import { List as _List_ } from "@aws-sdk/types";
import { _DataPoint } from "./_DataPoint";

export const _DataPointsList: _List_ = {
  type: "list",
  member: {
    shape: _DataPoint
  }
};
