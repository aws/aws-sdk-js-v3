import { List as _List_ } from "@aws-sdk/types";
import { _SyntaxToken } from "./_SyntaxToken";

export const _ListOfSyntaxTokens: _List_ = {
  type: "list",
  member: {
    shape: _SyntaxToken
  }
};
