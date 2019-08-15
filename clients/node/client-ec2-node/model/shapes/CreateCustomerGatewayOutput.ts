import { _CustomerGateway } from "./_CustomerGateway";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCustomerGatewayOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CustomerGateway: {
      shape: _CustomerGateway,
      locationName: "customerGateway"
    }
  }
};
