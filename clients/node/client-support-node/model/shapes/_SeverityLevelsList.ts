import { List as _List_ } from "@aws-sdk/types";
import { _SeverityLevel } from "./_SeverityLevel";

export const _SeverityLevelsList: _List_ = {
  type: "list",
  member: {
    shape: _SeverityLevel
  }
};
