import { _DocumentVersionMetadataList } from "./_DocumentVersionMetadataList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDocumentVersionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DocumentVersions: {
      shape: _DocumentVersionMetadataList
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
