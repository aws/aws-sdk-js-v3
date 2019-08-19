import { List as _List_ } from "@aws-sdk/types";
import { _JobExecutionSummaryForThing } from "./_JobExecutionSummaryForThing";

export const _JobExecutionSummaryForThingList: _List_ = {
  type: "list",
  member: {
    shape: _JobExecutionSummaryForThing
  }
};
