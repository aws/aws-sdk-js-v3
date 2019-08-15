import { List as _List_ } from "@aws-sdk/types";
import { _ModelPackageContainerDefinition } from "./_ModelPackageContainerDefinition";

export const _ModelPackageContainerDefinitionList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _ModelPackageContainerDefinition
  }
};
