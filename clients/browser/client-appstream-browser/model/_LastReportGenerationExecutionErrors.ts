import { List as _List_ } from "@aws-sdk/types";
import { _LastReportGenerationExecutionError } from "./_LastReportGenerationExecutionError";

export const _LastReportGenerationExecutionErrors: _List_ = {
  type: "list",
  member: {
    shape: _LastReportGenerationExecutionError
  }
};
