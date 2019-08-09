import { List as _List_ } from "@aws-sdk/types";
import { _IntentMetadata } from "./_IntentMetadata";

export const _IntentMetadataList: _List_ = {
  type: "list",
  member: {
    shape: _IntentMetadata
  }
};
