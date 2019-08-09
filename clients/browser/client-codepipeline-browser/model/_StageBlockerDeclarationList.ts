import { List as _List_ } from "@aws-sdk/types";
import { _BlockerDeclaration } from "./_BlockerDeclaration";

export const _StageBlockerDeclarationList: _List_ = {
  type: "list",
  member: {
    shape: _BlockerDeclaration
  }
};
