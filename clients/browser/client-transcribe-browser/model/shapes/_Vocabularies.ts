import { List as _List_ } from "@aws-sdk/types";
import { _VocabularyInfo } from "./_VocabularyInfo";

export const _Vocabularies: _List_ = {
  type: "list",
  member: {
    shape: _VocabularyInfo
  }
};
