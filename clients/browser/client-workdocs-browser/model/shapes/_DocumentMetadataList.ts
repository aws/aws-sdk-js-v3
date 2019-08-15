import { List as _List_ } from "@aws-sdk/types";
import { _DocumentMetadata } from "./_DocumentMetadata";

export const _DocumentMetadataList: _List_ = {
  type: "list",
  member: {
    shape: _DocumentMetadata
  }
};
