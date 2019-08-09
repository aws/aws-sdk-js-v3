import { CreateThingTypeInput } from "./CreateThingTypeInput";
import { CreateThingTypeOutput } from "./CreateThingTypeOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
