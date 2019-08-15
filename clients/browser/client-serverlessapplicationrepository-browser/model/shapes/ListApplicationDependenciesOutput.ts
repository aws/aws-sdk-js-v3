import { ___listOfApplicationDependencySummary } from "./___listOfApplicationDependencySummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListApplicationDependenciesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Dependencies: {
      shape: ___listOfApplicationDependencySummary,
      locationName: "dependencies"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
