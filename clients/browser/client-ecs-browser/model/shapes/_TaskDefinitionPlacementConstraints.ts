import { List as _List_ } from "@aws-sdk/types";
import { _TaskDefinitionPlacementConstraint } from "./_TaskDefinitionPlacementConstraint";

export const _TaskDefinitionPlacementConstraints: _List_ = {
  type: "list",
  member: {
    shape: _TaskDefinitionPlacementConstraint
  }
};
