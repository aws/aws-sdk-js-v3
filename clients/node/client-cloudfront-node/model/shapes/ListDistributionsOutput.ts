import { _DistributionList } from "./_DistributionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDistributionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DistributionList: {
      shape: _DistributionList
    }
  },
  payload: "DistributionList"
};
