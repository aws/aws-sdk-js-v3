import { _DocumentMetadata } from "./_DocumentMetadata";
import { _BlockList } from "./_BlockList";
import { _Warnings } from "./_Warnings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDocumentTextDetectionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DocumentMetadata: {
      shape: _DocumentMetadata
    },
    JobStatus: {
      shape: {
        type: "string"
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Blocks: {
      shape: _BlockList
    },
    Warnings: {
      shape: _Warnings
    },
    StatusMessage: {
      shape: {
        type: "string"
      }
    }
  }
};
