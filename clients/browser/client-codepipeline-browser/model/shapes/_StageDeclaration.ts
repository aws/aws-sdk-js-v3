import { _StageBlockerDeclarationList } from "./_StageBlockerDeclarationList";
import { _StageActionDeclarationList } from "./_StageActionDeclarationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StageDeclaration: _Structure_ = {
  type: "structure",
  required: ["name", "actions"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    blockers: {
      shape: _StageBlockerDeclarationList
    },
    actions: {
      shape: _StageActionDeclarationList
    }
  }
};
