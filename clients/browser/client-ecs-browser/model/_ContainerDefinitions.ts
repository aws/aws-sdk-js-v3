import { List as _List_ } from "@aws-sdk/types";
import { _ContainerDefinition } from "./_ContainerDefinition";

export const _ContainerDefinitions: _List_ = {
  type: "list",
  member: {
    shape: _ContainerDefinition
  }
};
