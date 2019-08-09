import { ___listOfApi } from "./___listOfApi";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetApisOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Items: {
      shape: ___listOfApi,
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
