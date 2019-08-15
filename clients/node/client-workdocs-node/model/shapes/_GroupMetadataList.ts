import { List as _List_ } from "@aws-sdk/types";
import { _GroupMetadata } from "./_GroupMetadata";

export const _GroupMetadataList: _List_ = {
  type: "list",
  member: {
    shape: _GroupMetadata
  }
};
