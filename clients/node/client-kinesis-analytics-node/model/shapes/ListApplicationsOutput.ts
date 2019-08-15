import { _ApplicationSummaries } from "./_ApplicationSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListApplicationsOutput: _Structure_ = {
  type: "structure",
  required: ["ApplicationSummaries", "HasMoreApplications"],
  members: {
    ApplicationSummaries: {
      shape: _ApplicationSummaries
    },
    HasMoreApplications: {
      shape: {
        type: "boolean"
      }
    }
  }
};
