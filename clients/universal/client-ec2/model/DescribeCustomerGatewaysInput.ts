import { _CustomerGatewayIdStringList } from "./_CustomerGatewayIdStringList";
import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCustomerGatewaysInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CustomerGatewayIds: {
      shape: _CustomerGatewayIdStringList,
      locationName: "CustomerGatewayId"
    },
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    }
  }
};
