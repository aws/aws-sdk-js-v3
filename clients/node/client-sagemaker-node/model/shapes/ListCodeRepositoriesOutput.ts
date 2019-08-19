import { _CodeRepositorySummaryList } from "./_CodeRepositorySummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListCodeRepositoriesOutput: _Structure_ = {
  type: "structure",
  required: ["CodeRepositorySummaryList"],
  members: {
    CodeRepositorySummaryList: {
      shape: _CodeRepositorySummaryList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
