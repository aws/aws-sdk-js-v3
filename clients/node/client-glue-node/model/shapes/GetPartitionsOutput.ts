import { _PartitionList } from "./_PartitionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetPartitionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Partitions: {
      shape: _PartitionList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
