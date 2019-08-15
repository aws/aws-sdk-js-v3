import { _ModelPackageSummaryList } from "./_ModelPackageSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListModelPackagesOutput: _Structure_ = {
  type: "structure",
  required: ["ModelPackageSummaryList"],
  members: {
    ModelPackageSummaryList: {
      shape: _ModelPackageSummaryList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
