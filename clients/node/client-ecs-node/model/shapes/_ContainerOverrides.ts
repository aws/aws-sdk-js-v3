import { List as _List_ } from "@aws-sdk/types";
import { _ContainerOverride } from "./_ContainerOverride";

export const _ContainerOverrides: _List_ = {
  type: "list",
  member: {
    shape: _ContainerOverride
  }
};
