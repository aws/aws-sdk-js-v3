import { List as _List_ } from "@aws-sdk/types";
import { _BotChannelAssociation } from "./_BotChannelAssociation";

export const _BotChannelAssociationList: _List_ = {
  type: "list",
  member: {
    shape: _BotChannelAssociation
  }
};
