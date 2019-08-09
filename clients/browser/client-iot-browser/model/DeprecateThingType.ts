import { DeprecateThingTypeInput } from "./DeprecateThingTypeInput";
import { DeprecateThingTypeOutput } from "./DeprecateThingTypeOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
