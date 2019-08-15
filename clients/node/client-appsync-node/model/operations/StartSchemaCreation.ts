import { StartSchemaCreationInput } from "../shapes/StartSchemaCreationInput";
import { StartSchemaCreationOutput } from "../shapes/StartSchemaCreationOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartSchemaCreation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartSchemaCreation",
  http: {
    method: "POST",
    requestUri: "/v1/apis/{apiId}/schemacreation"
  },
  input: {
    shape: StartSchemaCreationInput
  },
  output: {
    shape: StartSchemaCreationOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: NotFoundException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalFailureException
    }
  ]
};
