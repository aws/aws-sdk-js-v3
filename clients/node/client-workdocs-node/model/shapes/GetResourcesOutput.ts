import { _FolderMetadataList } from "./_FolderMetadataList";
import { _DocumentMetadataList } from "./_DocumentMetadataList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetResourcesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Folders: {
      shape: _FolderMetadataList
    },
    Documents: {
      shape: _DocumentMetadataList
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
