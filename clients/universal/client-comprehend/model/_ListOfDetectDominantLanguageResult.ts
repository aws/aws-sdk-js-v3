import { List as _List_ } from "@aws-sdk/types";
import { _BatchDetectDominantLanguageItemResult } from "./_BatchDetectDominantLanguageItemResult";

export const _ListOfDetectDominantLanguageResult: _List_ = {
  type: "list",
  member: {
    shape: _BatchDetectDominantLanguageItemResult
  }
};
