import { _ObjectReference } from "./_ObjectReference";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AttachToIndexInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryArn", "IndexReference", "TargetReference"],
  members: {
    DirectoryArn: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-data-partition"
    },
    IndexReference: {
      shape: _ObjectReference
    },
    TargetReference: {
      shape: _ObjectReference
    }
  }
};
