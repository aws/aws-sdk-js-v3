import { List as _List_ } from "@aws-sdk/types";
import { _BotMetadata } from "./_BotMetadata";

export const _BotMetadataList: _List_ = {
  type: "list",
  member: {
    shape: _BotMetadata
  }
};
