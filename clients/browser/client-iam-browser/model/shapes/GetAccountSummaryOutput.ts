import { _summaryMapType } from "./_summaryMapType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAccountSummaryOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SummaryMap: {
      shape: _summaryMapType
    }
  }
};
