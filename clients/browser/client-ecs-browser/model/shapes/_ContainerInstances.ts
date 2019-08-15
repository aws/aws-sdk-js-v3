import { List as _List_ } from "@aws-sdk/types";
import { _ContainerInstance } from "./_ContainerInstance";

export const _ContainerInstances: _List_ = {
  type: "list",
  member: {
    shape: _ContainerInstance
  }
};
