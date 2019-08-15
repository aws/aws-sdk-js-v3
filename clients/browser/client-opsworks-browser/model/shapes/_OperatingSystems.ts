import { List as _List_ } from "@aws-sdk/types";
import { _OperatingSystem } from "./_OperatingSystem";

export const _OperatingSystems: _List_ = {
  type: "list",
  member: {
    shape: _OperatingSystem
  }
};
