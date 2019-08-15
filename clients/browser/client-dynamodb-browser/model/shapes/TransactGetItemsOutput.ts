import { _ConsumedCapacityMultiple } from "./_ConsumedCapacityMultiple";
import { _ItemResponseList } from "./_ItemResponseList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TransactGetItemsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConsumedCapacity: {
      shape: _ConsumedCapacityMultiple
    },
    Responses: {
      shape: _ItemResponseList
    }
  }
};
