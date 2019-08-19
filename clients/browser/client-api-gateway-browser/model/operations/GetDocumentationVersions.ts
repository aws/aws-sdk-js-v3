import { GetDocumentationVersionsInput } from "../shapes/GetDocumentationVersionsInput";
import { GetDocumentationVersionsOutput } from "../shapes/GetDocumentationVersionsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDocumentationVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDocumentationVersions",
  http: {
    method: "GET",
    requestUri: "/restapis/{restapi_id}/documentation/versions"
  },
  input: {
    shape: GetDocumentationVersionsInput
  },
  output: {
    shape: GetDocumentationVersionsOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
