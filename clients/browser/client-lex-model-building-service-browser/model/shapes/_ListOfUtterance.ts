import { List as _List_ } from "@aws-sdk/types";
import { _UtteranceData } from "./_UtteranceData";

export const _ListOfUtterance: _List_ = {
  type: "list",
  member: {
    shape: _UtteranceData
  }
};
