import { ListLocationsInput } from "./ListLocationsInput";
import { ListLocationsOutput } from "./ListLocationsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
