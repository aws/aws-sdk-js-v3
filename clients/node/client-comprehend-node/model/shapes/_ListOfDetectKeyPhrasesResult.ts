import { List as _List_ } from "@aws-sdk/types";
import { _BatchDetectKeyPhrasesItemResult } from "./_BatchDetectKeyPhrasesItemResult";

export const _ListOfDetectKeyPhrasesResult: _List_ = {
  type: "list",
  member: {
    shape: _BatchDetectKeyPhrasesItemResult
  }
};
