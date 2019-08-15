import { _ModelSummaryList } from "./_ModelSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListModelsOutput: _Structure_ = {
  type: "structure",
  required: ["Models"],
  members: {
    Models: {
      shape: _ModelSummaryList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
