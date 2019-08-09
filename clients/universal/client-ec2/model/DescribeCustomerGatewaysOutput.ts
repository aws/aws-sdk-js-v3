import { _CustomerGatewayList } from "./_CustomerGatewayList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCustomerGatewaysOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CustomerGateways: {
      shape: _CustomerGatewayList,
      locationName: "customerGatewaySet"
    }
  }
};
