import { List as _List_ } from "@aws-sdk/types";
import { _FileMetadata } from "./_FileMetadata";

export const _FilesMetadata: _List_ = {
  type: "list",
  member: {
    shape: _FileMetadata
  }
};
