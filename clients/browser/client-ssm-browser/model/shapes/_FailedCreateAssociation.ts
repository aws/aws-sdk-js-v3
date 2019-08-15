import { _CreateAssociationBatchRequestEntry } from "./_CreateAssociationBatchRequestEntry";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FailedCreateAssociation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Entry: {
      shape: _CreateAssociationBatchRequestEntry
    },
    Message: {
      shape: {
        type: "string"
      }
    },
    Fault: {
      shape: {
        type: "string"
      }
    }
  }
};
