import { ListLocationsInput } from "../shapes/ListLocationsInput";
import { ListLocationsOutput } from "../shapes/ListLocationsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListLocations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListLocations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListLocationsInput
  },
  output: {
    shape: ListLocationsOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalException
    }
  ]
};
