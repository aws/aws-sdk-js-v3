import { List as _List_ } from "@aws-sdk/types";
import { _BatchDetectSyntaxItemResult } from "./_BatchDetectSyntaxItemResult";

export const _ListOfDetectSyntaxResult: _List_ = {
  type: "list",
  member: {
    shape: _BatchDetectSyntaxItemResult
  }
};
