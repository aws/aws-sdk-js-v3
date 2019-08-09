import { ___listOfRoute } from "./___listOfRoute";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRoutesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Items: {
      shape: ___listOfRoute,
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
