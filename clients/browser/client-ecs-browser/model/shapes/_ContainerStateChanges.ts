import { List as _List_ } from "@aws-sdk/types";
import { _ContainerStateChange } from "./_ContainerStateChange";

export const _ContainerStateChanges: _List_ = {
  type: "list",
  member: {
    shape: _ContainerStateChange
  }
};
