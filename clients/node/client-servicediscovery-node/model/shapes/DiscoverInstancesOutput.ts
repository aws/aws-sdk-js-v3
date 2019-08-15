import { _HttpInstanceSummaryList } from "./_HttpInstanceSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DiscoverInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Instances: {
      shape: _HttpInstanceSummaryList
    }
  }
};
