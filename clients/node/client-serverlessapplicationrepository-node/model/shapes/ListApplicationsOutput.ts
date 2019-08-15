import { ___listOfApplicationSummary } from "./___listOfApplicationSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListApplicationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Applications: {
      shape: ___listOfApplicationSummary,
      locationName: "applications"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
