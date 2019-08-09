import { List as _List_ } from "@aws-sdk/types";
import { _BatchDetectEntitiesItemResult } from "./_BatchDetectEntitiesItemResult";

export const _ListOfDetectEntitiesResult: _List_ = {
  type: "list",
  member: {
    shape: _BatchDetectEntitiesItemResult
  }
};
