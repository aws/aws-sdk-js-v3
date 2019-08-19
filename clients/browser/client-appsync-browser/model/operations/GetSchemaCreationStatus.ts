import { GetSchemaCreationStatusInput } from "../shapes/GetSchemaCreationStatusInput";
import { GetSchemaCreationStatusOutput } from "../shapes/GetSchemaCreationStatusOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
