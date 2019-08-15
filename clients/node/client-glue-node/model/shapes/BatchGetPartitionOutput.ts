import { _PartitionList } from "./_PartitionList";
import { _BatchGetPartitionValueList } from "./_BatchGetPartitionValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetPartitionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Partitions: {
      shape: _PartitionList
    },
    UnprocessedKeys: {
      shape: _BatchGetPartitionValueList
    }
  }
};
