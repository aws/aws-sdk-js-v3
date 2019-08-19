import { AcceptReservedNodeExchangeInput } from "../shapes/AcceptReservedNodeExchangeInput";
import { AcceptReservedNodeExchangeOutput } from "../shapes/AcceptReservedNodeExchangeOutput";
import { ReservedNodeNotFoundFault } from "../shapes/ReservedNodeNotFoundFault";
import { InvalidReservedNodeStateFault } from "../shapes/InvalidReservedNodeStateFault";
import { ReservedNodeAlreadyMigratedFault } from "../shapes/ReservedNodeAlreadyMigratedFault";
import { ReservedNodeOfferingNotFoundFault } from "../shapes/ReservedNodeOfferingNotFoundFault";
import { UnsupportedOperationFault } from "../shapes/UnsupportedOperationFault";
import { DependentServiceUnavailableFault } from "../shapes/DependentServiceUnavailableFault";
import { ReservedNodeAlreadyExistsFault } from "../shapes/ReservedNodeAlreadyExistsFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AcceptReservedNodeExchange: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AcceptReservedNodeExchange",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AcceptReservedNodeExchangeInput
  },
  output: {
    shape: AcceptReservedNodeExchangeOutput,
    resultWrapper: "AcceptReservedNodeExchangeResult"
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
    },
    {
      shape: ReservedNodeAlreadyExistsFault
    }
  ]
};
