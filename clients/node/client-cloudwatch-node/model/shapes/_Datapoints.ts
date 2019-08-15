import { List as _List_ } from "@aws-sdk/types";
import { _Datapoint } from "./_Datapoint";

export const _Datapoints: _List_ = {
  type: "list",
  member: {
    shape: _Datapoint
  }
};
