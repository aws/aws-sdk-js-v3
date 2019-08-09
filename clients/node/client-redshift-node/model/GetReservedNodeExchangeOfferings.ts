import { GetReservedNodeExchangeOfferingsInput } from "./GetReservedNodeExchangeOfferingsInput";
import { GetReservedNodeExchangeOfferingsOutput } from "./GetReservedNodeExchangeOfferingsOutput";
import { ReservedNodeNotFoundFault } from "./ReservedNodeNotFoundFault";
import { InvalidReservedNodeStateFault } from "./InvalidReservedNodeStateFault";
import { ReservedNodeAlreadyMigratedFault } from "./ReservedNodeAlreadyMigratedFault";
import { ReservedNodeOfferingNotFoundFault } from "./ReservedNodeOfferingNotFoundFault";
import { UnsupportedOperationFault } from "./UnsupportedOperationFault";
import { DependentServiceUnavailableFault } from "./DependentServiceUnavailableFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
