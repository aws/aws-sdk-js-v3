import { _ProductSubscriptionArnList } from "./_ProductSubscriptionArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListEnabledProductsForImportOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProductSubscriptions: {
      shape: _ProductSubscriptionArnList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
