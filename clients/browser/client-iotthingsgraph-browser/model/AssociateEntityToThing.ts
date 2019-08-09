import { AssociateEntityToThingInput } from "./AssociateEntityToThingInput";
import { AssociateEntityToThingOutput } from "./AssociateEntityToThingOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalFailureException } from "./InternalFailureException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
