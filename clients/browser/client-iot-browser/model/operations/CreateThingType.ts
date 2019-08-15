import { CreateThingTypeInput } from "../shapes/CreateThingTypeInput";
import { CreateThingTypeOutput } from "../shapes/CreateThingTypeOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateThingType: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateThingType",
  http: {
    method: "POST",
    requestUri: "/thing-types/{thingTypeName}"
  },
  input: {
    shape: CreateThingTypeInput
  },
  output: {
    shape: CreateThingTypeOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ResourceAlreadyExistsException
    }
  ]
};
