import { ___listOfDomainName } from "./___listOfDomainName";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDomainNamesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Items: {
      shape: ___listOfDomainName,
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
