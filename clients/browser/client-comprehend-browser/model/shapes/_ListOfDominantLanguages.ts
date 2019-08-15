import { List as _List_ } from "@aws-sdk/types";
import { _DominantLanguage } from "./_DominantLanguage";

export const _ListOfDominantLanguages: _List_ = {
  type: "list",
  member: {
    shape: _DominantLanguage
  }
};
