import { _DocumentVersionList } from "./_DocumentVersionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDocumentVersionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DocumentVersions: {
      shape: _DocumentVersionList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
