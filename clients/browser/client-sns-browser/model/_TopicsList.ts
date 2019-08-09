import { List as _List_ } from "@aws-sdk/types";
import { _Topic } from "./_Topic";

export const _TopicsList: _List_ = {
  type: "list",
  member: {
    shape: _Topic
  }
};
