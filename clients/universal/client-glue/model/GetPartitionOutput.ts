import { _Partition } from "./_Partition";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetPartitionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Partition: {
      shape: _Partition
    }
  }
};
