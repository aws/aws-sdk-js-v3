import { _EntityAggregateList } from "./_EntityAggregateList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEntityAggregatesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    entityAggregates: {
      shape: _EntityAggregateList
    }
  }
};
