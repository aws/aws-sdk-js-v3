import { ___listOfOffering } from "./___listOfOffering";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListOfferingsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    },
    Offerings: {
      shape: ___listOfOffering,
      locationName: "offerings"
    }
  }
};
