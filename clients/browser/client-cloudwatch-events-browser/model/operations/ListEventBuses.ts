import { ListEventBusesInput } from "../shapes/ListEventBusesInput";
import { ListEventBusesOutput } from "../shapes/ListEventBusesOutput";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListEventBuses: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListEventBuses",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListEventBusesInput
  },
  output: {
    shape: ListEventBusesOutput
  },
  errors: [
    {
      shape: InternalException
    }
  ]
};
