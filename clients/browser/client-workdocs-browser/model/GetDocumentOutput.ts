import { _DocumentMetadata } from "./_DocumentMetadata";
import { _CustomMetadataMap } from "./_CustomMetadataMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDocumentOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Metadata: {
      shape: _DocumentMetadata
    },
    CustomMetadata: {
      shape: _CustomMetadataMap
    }
  }
};
