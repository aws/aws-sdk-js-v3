import { _StreamDescriptionSummary } from "./_StreamDescriptionSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStreamSummaryOutput: _Structure_ = {
  type: "structure",
  required: ["StreamDescriptionSummary"],
  members: {
    StreamDescriptionSummary: {
      shape: _StreamDescriptionSummary
    }
  }
};
