import { List as _List_ } from "@aws-sdk/types";
import { _BatchDetectSentimentItemResult } from "./_BatchDetectSentimentItemResult";

export const _ListOfDetectSentimentResult: _List_ = {
  type: "list",
  member: {
    shape: _BatchDetectSentimentItemResult
  }
};
