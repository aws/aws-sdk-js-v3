import { DeprecateThingTypeInput } from "../shapes/DeprecateThingTypeInput";
import { DeprecateThingTypeOutput } from "../shapes/DeprecateThingTypeOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeprecateThingType: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeprecateThingType",
  http: {
    method: "POST",
    requestUri: "/thing-types/{thingTypeName}/deprecate"
  },
  input: {
    shape: DeprecateThingTypeInput
  },
  output: {
    shape: DeprecateThingTypeOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
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
    }
  ]
};
