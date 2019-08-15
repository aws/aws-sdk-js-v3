import { _Offerings } from "./_Offerings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListOfferingsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    offerings: {
      shape: _Offerings
    },
    nextToken: {
      shape: {
        type: "string",
        min: 4
      }
    }
  }
};
