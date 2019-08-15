import { _PartitionErrors } from "./_PartitionErrors";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchCreatePartitionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Errors: {
      shape: _PartitionErrors
    }
  }
};
