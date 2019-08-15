import { DescribeReservedNodeOfferingsInput } from "../shapes/DescribeReservedNodeOfferingsInput";
import { DescribeReservedNodeOfferingsOutput } from "../shapes/DescribeReservedNodeOfferingsOutput";
import { ReservedNodeOfferingNotFoundFault } from "../shapes/ReservedNodeOfferingNotFoundFault";
import { UnsupportedOperationFault } from "../shapes/UnsupportedOperationFault";
import { DependentServiceUnavailableFault } from "../shapes/DependentServiceUnavailableFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeReservedNodeOfferings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeReservedNodeOfferings",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeReservedNodeOfferingsInput
  },
  output: {
    shape: DescribeReservedNodeOfferingsOutput,
    resultWrapper: "DescribeReservedNodeOfferingsResult"
  },
  errors: [
    {
      shape: ReservedNodeOfferingNotFoundFault
    },
    {
      shape: UnsupportedOperationFault
    },
    {
      shape: DependentServiceUnavailableFault
    }
  ]
};
