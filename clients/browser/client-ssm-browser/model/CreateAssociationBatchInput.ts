import { _CreateAssociationBatchRequestEntries } from "./_CreateAssociationBatchRequestEntries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateAssociationBatchInput: _Structure_ = {
  type: "structure",
  required: ["Entries"],
  members: {
    Entries: {
      shape: _CreateAssociationBatchRequestEntries
    }
  }
};
