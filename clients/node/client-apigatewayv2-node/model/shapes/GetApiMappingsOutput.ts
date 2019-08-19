import { ___listOfApiMapping } from "./___listOfApiMapping";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetApiMappingsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Items: {
      shape: ___listOfApiMapping,
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
