import { _BatchReadOperationList } from "./_BatchReadOperationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchReadInput: _Structure_ = {
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
      shape: _BatchReadOperationList
    },
    ConsistencyLevel: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-consistency-level"
    }
  }
};
