import { GetReservedNodeExchangeOfferingsInput } from "../shapes/GetReservedNodeExchangeOfferingsInput";
import { GetReservedNodeExchangeOfferingsOutput } from "../shapes/GetReservedNodeExchangeOfferingsOutput";
import { ReservedNodeNotFoundFault } from "../shapes/ReservedNodeNotFoundFault";
import { InvalidReservedNodeStateFault } from "../shapes/InvalidReservedNodeStateFault";
import { ReservedNodeAlreadyMigratedFault } from "../shapes/ReservedNodeAlreadyMigratedFault";
import { ReservedNodeOfferingNotFoundFault } from "../shapes/ReservedNodeOfferingNotFoundFault";
import { UnsupportedOperationFault } from "../shapes/UnsupportedOperationFault";
import { DependentServiceUnavailableFault } from "../shapes/DependentServiceUnavailableFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetReservedNodeExchangeOfferings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetReservedNodeExchangeOfferings",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetReservedNodeExchangeOfferingsInput
  },
  output: {
    shape: GetReservedNodeExchangeOfferingsOutput,
    resultWrapper: "GetReservedNodeExchangeOfferingsResult"
  },
  errors: [
    {
      shape: ReservedNodeNotFoundFault
    },
    {
      shape: InvalidReservedNodeStateFault
    },
    {
      shape: ReservedNodeAlreadyMigratedFault
    },
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
