import { _policyDocumentVersionListType } from "./_policyDocumentVersionListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPolicyVersionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Versions: {
      shape: _policyDocumentVersionListType
    },
    IsTruncated: {
      shape: {
        type: "boolean"
      }
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
