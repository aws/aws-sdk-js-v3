import { _StreamingDistributionList } from "./_StreamingDistributionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListStreamingDistributionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StreamingDistributionList: {
      shape: _StreamingDistributionList
    }
  },
  payload: "StreamingDistributionList"
};
