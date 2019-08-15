import { ___listOfIntegrationResponse } from "./___listOfIntegrationResponse";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetIntegrationResponsesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Items: {
      shape: ___listOfIntegrationResponse,
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
