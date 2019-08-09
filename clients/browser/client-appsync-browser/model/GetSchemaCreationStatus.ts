import { GetSchemaCreationStatusInput } from "./GetSchemaCreationStatusInput";
import { GetSchemaCreationStatusOutput } from "./GetSchemaCreationStatusOutput";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetSchemaCreationStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSchemaCreationStatus",
  http: {
    method: "GET",
    requestUri: "/v1/apis/{apiId}/schemacreation"
  },
  input: {
    shape: GetSchemaCreationStatusInput
  },
  output: {
    shape: GetSchemaCreationStatusOutput
  },
  errors: [
    {
      shape: BadRequestException
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
