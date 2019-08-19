import { List as _List_ } from "@aws-sdk/types";
import { _StageDeclaration } from "./_StageDeclaration";

export const _PipelineStageDeclarationList: _List_ = {
  type: "list",
  member: {
    shape: _StageDeclaration
  }
};
