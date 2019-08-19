import { List as _List_ } from "@aws-sdk/types";
import { _ContainerDependency } from "./_ContainerDependency";

export const _ContainerDependencies: _List_ = {
  type: "list",
  member: {
    shape: _ContainerDependency
  }
};
