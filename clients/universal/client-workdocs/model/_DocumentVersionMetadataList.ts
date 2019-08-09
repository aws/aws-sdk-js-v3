import { List as _List_ } from "@aws-sdk/types";
import { _DocumentVersionMetadata } from "./_DocumentVersionMetadata";

export const _DocumentVersionMetadataList: _List_ = {
  type: "list",
  member: {
    shape: _DocumentVersionMetadata
  }
};
