import { _ProductViewDetails } from "./_ProductViewDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchProductsAsAdminOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProductViewDetails: {
      shape: _ProductViewDetails
    },
    NextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
