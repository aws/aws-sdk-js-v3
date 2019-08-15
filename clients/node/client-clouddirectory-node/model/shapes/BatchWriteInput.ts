import { _BatchWriteOperationList } from "./_BatchWriteOperationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchWriteInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryArn", "Operations"],
  members: {
    DirectoryArn: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-data-partition"
    },
    Operations: {
      shape: _BatchWriteOperationList
    }
  }
};
