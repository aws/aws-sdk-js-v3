import { ___listOfRouteResponse } from "./___listOfRouteResponse";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRouteResponsesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Items: {
      shape: ___listOfRouteResponse,
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
