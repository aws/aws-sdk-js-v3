import { List as _List_ } from "@aws-sdk/types";
import { _SystemControl } from "./_SystemControl";

export const _SystemControls: _List_ = {
  type: "list",
  member: {
    shape: _SystemControl
  }
};
