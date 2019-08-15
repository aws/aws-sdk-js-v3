import { ListJobExecutionsForThingInput } from "../shapes/ListJobExecutionsForThingInput";
import { ListJobExecutionsForThingOutput } from "../shapes/ListJobExecutionsForThingOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListJobExecutionsForThing: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListJobExecutionsForThing",
  http: {
    method: "GET",
    requestUri: "/things/{thingName}/jobs"
  },
  input: {
    shape: ListJobExecutionsForThingInput
  },
  output: {
    shape: ListJobExecutionsForThingOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
