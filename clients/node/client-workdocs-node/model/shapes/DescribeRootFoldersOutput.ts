import { _FolderMetadataList } from "./_FolderMetadataList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeRootFoldersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Folders: {
      shape: _FolderMetadataList
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
