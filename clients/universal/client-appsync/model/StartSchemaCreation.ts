import { StartSchemaCreationInput } from "./StartSchemaCreationInput";
import { StartSchemaCreationOutput } from "./StartSchemaCreationOutput";
import { BadRequestException } from "./BadRequestException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
