import { List as _List_ } from "@aws-sdk/types";
import { _SubscribedWorkteam } from "./_SubscribedWorkteam";

export const _SubscribedWorkteams: _List_ = {
  type: "list",
  member: {
    shape: _SubscribedWorkteam
  }
};
