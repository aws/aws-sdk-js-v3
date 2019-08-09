import { _ProvisionedProductAttributes } from "./_ProvisionedProductAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchProvisionedProductsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProvisionedProducts: {
      shape: _ProvisionedProductAttributes
    },
    TotalResultsCount: {
      shape: {
        type: "integer"
      }
    },
    NextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
