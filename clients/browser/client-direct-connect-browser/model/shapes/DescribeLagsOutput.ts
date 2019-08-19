import { _LagList } from "./_LagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLagsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    lags: {
      shape: _LagList
    }
  }
};
