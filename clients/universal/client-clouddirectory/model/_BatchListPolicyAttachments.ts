import { _ObjectReference } from "./_ObjectReference";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchListPolicyAttachments: _Structure_ = {
  type: "structure",
  required: ["PolicyReference"],
  members: {
    PolicyReference: {
      shape: _ObjectReference
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
