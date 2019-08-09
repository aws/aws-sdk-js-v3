import { ListJobExecutionsForThingInput } from "./ListJobExecutionsForThingInput";
import { ListJobExecutionsForThingOutput } from "./ListJobExecutionsForThingOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
