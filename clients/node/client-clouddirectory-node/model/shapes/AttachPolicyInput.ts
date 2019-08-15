import { _ObjectReference } from "./_ObjectReference";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AttachPolicyInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryArn", "PolicyReference", "ObjectReference"],
  members: {
    DirectoryArn: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-data-partition"
    },
    PolicyReference: {
      shape: _ObjectReference
    },
    ObjectReference: {
      shape: _ObjectReference
    }
  }
};
