import { List as _List_ } from "@aws-sdk/types";
import { _UtteranceList } from "./_UtteranceList";

export const _ListsOfUtterances: _List_ = {
  type: "list",
  member: {
    shape: _UtteranceList
  }
};
