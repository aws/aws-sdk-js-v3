import { List as _List_ } from "@aws-sdk/types";
import { _GameSessionQueueDestination } from "./_GameSessionQueueDestination";

export const _GameSessionQueueDestinationList: _List_ = {
  type: "list",
  member: {
    shape: _GameSessionQueueDestination
  }
};
