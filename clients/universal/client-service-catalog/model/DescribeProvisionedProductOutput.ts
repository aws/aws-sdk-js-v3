import { _ProvisionedProductDetail } from "./_ProvisionedProductDetail";
import { _CloudWatchDashboards } from "./_CloudWatchDashboards";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeProvisionedProductOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProvisionedProductDetail: {
      shape: _ProvisionedProductDetail
    },
    CloudWatchDashboards: {
      shape: _CloudWatchDashboards
    }
  }
};
