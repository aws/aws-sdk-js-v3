import { List as _List_ } from "@aws-sdk/types";
import { _UserMetadata } from "./_UserMetadata";

export const _UserMetadataList: _List_ = {
  type: "list",
  member: {
    shape: _UserMetadata
  }
};
