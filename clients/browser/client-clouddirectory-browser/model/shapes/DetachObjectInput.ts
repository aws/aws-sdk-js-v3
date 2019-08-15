import { _ObjectReference } from "./_ObjectReference";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetachObjectInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryArn", "ParentReference", "LinkName"],
  members: {
    DirectoryArn: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-data-partition"
    },
    ParentReference: {
      shape: _ObjectReference
    },
    LinkName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
