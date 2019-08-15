import { List as _List_ } from "@aws-sdk/types";
import { _RobotApplicationSummary } from "./_RobotApplicationSummary";

export const _RobotApplicationSummaries: _List_ = {
  type: "list",
  member: {
    shape: _RobotApplicationSummary
  }
};
