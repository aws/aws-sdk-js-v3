import { List as _List_ } from "@aws-sdk/types";
import { _ConflictMetadata } from "./_ConflictMetadata";

export const _ConflictMetadataList: _List_ = {
  type: "list",
  member: {
    shape: _ConflictMetadata
  }
};
