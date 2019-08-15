import { List as _List_ } from "@aws-sdk/types";
import { _DevicePoolCompatibilityResult } from "./_DevicePoolCompatibilityResult";

export const _DevicePoolCompatibilityResults: _List_ = {
  type: "list",
  member: {
    shape: _DevicePoolCompatibilityResult
  }
};
