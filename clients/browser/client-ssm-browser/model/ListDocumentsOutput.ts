import { _DocumentIdentifierList } from "./_DocumentIdentifierList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDocumentsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DocumentIdentifiers: {
      shape: _DocumentIdentifierList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
