import { _EmailContent } from "./_EmailContent";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDeliverabilityTestReportInput: _Structure_ = {
  type: "structure",
  required: ["FromEmailAddress", "Content"],
  members: {
    ReportName: {
      shape: {
        type: "string"
      }
    },
    FromEmailAddress: {
      shape: {
        type: "string"
      }
    },
    Content: {
      shape: _EmailContent
    },
    Tags: {
      shape: _TagList
    }
  }
};
