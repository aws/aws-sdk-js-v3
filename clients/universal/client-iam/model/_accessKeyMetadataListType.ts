import { List as _List_ } from "@aws-sdk/types";
import { _AccessKeyMetadata } from "./_AccessKeyMetadata";

export const _accessKeyMetadataListType: _List_ = {
  type: "list",
  member: {
    shape: _AccessKeyMetadata
  }
};
