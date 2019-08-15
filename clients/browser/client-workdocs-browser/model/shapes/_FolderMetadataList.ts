import { List as _List_ } from "@aws-sdk/types";
import { _FolderMetadata } from "./_FolderMetadata";

export const _FolderMetadataList: _List_ = {
  type: "list",
  member: {
    shape: _FolderMetadata
  }
};
