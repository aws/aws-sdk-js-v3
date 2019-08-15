import { _FolderMetadata } from "./_FolderMetadata";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateFolderOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Metadata: {
      shape: _FolderMetadata
    }
  }
};
