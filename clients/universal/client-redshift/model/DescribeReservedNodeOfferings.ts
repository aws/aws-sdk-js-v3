import { DescribeReservedNodeOfferingsInput } from "./DescribeReservedNodeOfferingsInput";
import { DescribeReservedNodeOfferingsOutput } from "./DescribeReservedNodeOfferingsOutput";
import { ReservedNodeOfferingNotFoundFault } from "./ReservedNodeOfferingNotFoundFault";
import { UnsupportedOperationFault } from "./UnsupportedOperationFault";
import { DependentServiceUnavailableFault } from "./DependentServiceUnavailableFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
