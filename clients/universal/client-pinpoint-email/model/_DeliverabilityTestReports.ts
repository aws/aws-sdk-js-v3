import { List as _List_ } from "@aws-sdk/types";
import { _DeliverabilityTestReport } from "./_DeliverabilityTestReport";

export const _DeliverabilityTestReports: _List_ = {
  type: "list",
  member: {
    shape: _DeliverabilityTestReport
  }
};
