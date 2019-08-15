import { ___listOfIntegration } from "./___listOfIntegration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetIntegrationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Items: {
      shape: ___listOfIntegration,
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
