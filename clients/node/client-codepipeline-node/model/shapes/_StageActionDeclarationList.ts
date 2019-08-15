import { List as _List_ } from "@aws-sdk/types";
import { _ActionDeclaration } from "./_ActionDeclaration";

export const _StageActionDeclarationList: _List_ = {
  type: "list",
  member: {
    shape: _ActionDeclaration
  }
};
