import { List as _List_ } from "@aws-sdk/types";
import { _Bot } from "./_Bot";

export const _BotList: _List_ = {
  type: "list",
  member: {
    shape: _Bot
  }
};
