import { _DocumentVersionMetadata } from "./_DocumentVersionMetadata";
import { _CustomMetadataMap } from "./_CustomMetadataMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDocumentVersionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Metadata: {
      shape: _DocumentVersionMetadata
    },
    CustomMetadata: {
      shape: _CustomMetadataMap
    }
  }
};
