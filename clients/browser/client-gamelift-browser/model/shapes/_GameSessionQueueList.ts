import { List as _List_ } from "@aws-sdk/types";
import { _GameSessionQueue } from "./_GameSessionQueue";

export const _GameSessionQueueList: _List_ = {
  type: "list",
  member: {
    shape: _GameSessionQueue
  }
};
