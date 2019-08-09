import { AcceptReservedNodeExchangeInput } from "./AcceptReservedNodeExchangeInput";
import { AcceptReservedNodeExchangeOutput } from "./AcceptReservedNodeExchangeOutput";
import { ReservedNodeNotFoundFault } from "./ReservedNodeNotFoundFault";
import { InvalidReservedNodeStateFault } from "./InvalidReservedNodeStateFault";
import { ReservedNodeAlreadyMigratedFault } from "./ReservedNodeAlreadyMigratedFault";
import { ReservedNodeOfferingNotFoundFault } from "./ReservedNodeOfferingNotFoundFault";
import { UnsupportedOperationFault } from "./UnsupportedOperationFault";
import { DependentServiceUnavailableFault } from "./DependentServiceUnavailableFault";
import { ReservedNodeAlreadyExistsFault } from "./ReservedNodeAlreadyExistsFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
