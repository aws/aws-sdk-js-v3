import { ___listOfModel } from "./___listOfModel";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetModelsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Items: {
      shape: ___listOfModel,
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
