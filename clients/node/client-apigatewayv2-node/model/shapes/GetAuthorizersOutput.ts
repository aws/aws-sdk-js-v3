import { ___listOfAuthorizer } from "./___listOfAuthorizer";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAuthorizersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Items: {
      shape: ___listOfAuthorizer,
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
