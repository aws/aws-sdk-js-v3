import { _DocumentMetadata } from "./_DocumentMetadata";
import { _BlockList } from "./_BlockList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetectDocumentTextOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DocumentMetadata: {
      shape: _DocumentMetadata
    },
    Blocks: {
      shape: _BlockList
    }
  }
};
