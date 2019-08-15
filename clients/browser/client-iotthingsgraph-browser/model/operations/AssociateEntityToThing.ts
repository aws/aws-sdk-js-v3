import { AssociateEntityToThingInput } from "../shapes/AssociateEntityToThingInput";
import { AssociateEntityToThingOutput } from "../shapes/AssociateEntityToThingOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateEntityToThing: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateEntityToThing",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateEntityToThingInput
  },
  output: {
    shape: AssociateEntityToThingOutput
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
