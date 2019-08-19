import { DissociateEntityFromThingInput } from "../shapes/DissociateEntityFromThingInput";
import { DissociateEntityFromThingOutput } from "../shapes/DissociateEntityFromThingOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
