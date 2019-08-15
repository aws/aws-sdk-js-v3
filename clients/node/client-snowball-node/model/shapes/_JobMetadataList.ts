import { List as _List_ } from "@aws-sdk/types";
import { _JobMetadata } from "./_JobMetadata";

export const _JobMetadataList: _List_ = {
  type: "list",
  member: {
    shape: _JobMetadata
  }
};
