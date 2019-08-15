import { _ProductViewSummaries } from "./_ProductViewSummaries";
import { _ProductViewAggregations } from "./_ProductViewAggregations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchProductsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProductViewSummaries: {
      shape: _ProductViewSummaries
    },
    ProductViewAggregations: {
      shape: _ProductViewAggregations
    },
    NextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
