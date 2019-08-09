import { DissociateEntityFromThingInput } from "./DissociateEntityFromThingInput";
import { DissociateEntityFromThingOutput } from "./DissociateEntityFromThingOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalFailureException } from "./InternalFailureException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DissociateEntityFromThing: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DissociateEntityFromThing",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DissociateEntityFromThingInput
  },
  output: {
    shape: DissociateEntityFromThingOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ThrottlingException
    }
  ]
};
