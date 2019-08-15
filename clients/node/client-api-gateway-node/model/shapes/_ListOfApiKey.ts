import { List as _List_ } from "@aws-sdk/types";
import { _ApiKey } from "./_ApiKey";

export const _ListOfApiKey: _List_ = {
  type: "list",
  member: {
    shape: _ApiKey
  }
};
