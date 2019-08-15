import { ___listOfStage } from "./___listOfStage";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetStagesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Items: {
      shape: ___listOfStage,
      locationName: "items"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
