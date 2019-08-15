import { Structure as _Structure_ } from "@aws-sdk/types";

export const _KinesisParameters: _Structure_ = {
  type: "structure",
  required: ["PartitionKeyPath"],
  members: {
    PartitionKeyPath: {
      shape: {
        type: "string"
      }
    }
  }
};
