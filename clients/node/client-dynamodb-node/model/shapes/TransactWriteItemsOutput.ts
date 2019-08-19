import { _ConsumedCapacityMultiple } from "./_ConsumedCapacityMultiple";
import { _ItemCollectionMetricsPerTable } from "./_ItemCollectionMetricsPerTable";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TransactWriteItemsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConsumedCapacity: {
      shape: _ConsumedCapacityMultiple
    },
    ItemCollectionMetrics: {
      shape: _ItemCollectionMetricsPerTable
    }
  }
};
