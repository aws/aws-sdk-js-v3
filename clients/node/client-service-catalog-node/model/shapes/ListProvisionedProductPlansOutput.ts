import { _ProvisionedProductPlans } from "./_ProvisionedProductPlans";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListProvisionedProductPlansOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProvisionedProductPlans: {
      shape: _ProvisionedProductPlans
    },
    NextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
