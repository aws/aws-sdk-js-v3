import { _InstanceSummaryList } from "./_InstanceSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Instances: {
      shape: _InstanceSummaryList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
