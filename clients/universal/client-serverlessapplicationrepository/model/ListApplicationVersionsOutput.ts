import { ___listOfVersionSummary } from "./___listOfVersionSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListApplicationVersionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    },
    Versions: {
      shape: ___listOfVersionSummary,
      locationName: "versions"
    }
  }
};
