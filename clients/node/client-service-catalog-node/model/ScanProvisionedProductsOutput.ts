import { _ProvisionedProductDetails } from "./_ProvisionedProductDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ScanProvisionedProductsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProvisionedProducts: {
      shape: _ProvisionedProductDetails
    },
    NextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
