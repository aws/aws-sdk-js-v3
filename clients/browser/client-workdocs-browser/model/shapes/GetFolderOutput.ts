import { _FolderMetadata } from "./_FolderMetadata";
import { _CustomMetadataMap } from "./_CustomMetadataMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetFolderOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Metadata: {
      shape: _FolderMetadata
    },
    CustomMetadata: {
      shape: _CustomMetadataMap
    }
  }
};
