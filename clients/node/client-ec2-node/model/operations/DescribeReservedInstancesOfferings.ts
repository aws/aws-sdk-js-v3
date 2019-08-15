import { DescribeReservedInstancesOfferingsInput } from "../shapes/DescribeReservedInstancesOfferingsInput";
import { DescribeReservedInstancesOfferingsOutput } from "../shapes/DescribeReservedInstancesOfferingsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeReservedInstancesOfferings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeReservedInstancesOfferings",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeReservedInstancesOfferingsInput
  },
  output: {
    shape: DescribeReservedInstancesOfferingsOutput
  },
  errors: []
};
