import { _OfferingPromotions } from "./_OfferingPromotions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListOfferingPromotionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    offeringPromotions: {
      shape: _OfferingPromotions
    },
    nextToken: {
      shape: {
        type: "string",
        min: 4
      }
    }
  }
};
