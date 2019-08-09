import { _ProvisionedProductPlanDetails } from "./_ProvisionedProductPlanDetails";
import { _ResourceChanges } from "./_ResourceChanges";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeProvisionedProductPlanOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProvisionedProductPlanDetails: {
      shape: _ProvisionedProductPlanDetails
    },
    ResourceChanges: {
      shape: _ResourceChanges
    },
    NextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
