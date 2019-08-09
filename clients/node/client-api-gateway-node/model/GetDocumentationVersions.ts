import { GetDocumentationVersionsInput } from "./GetDocumentationVersionsInput";
import { GetDocumentationVersionsOutput } from "./GetDocumentationVersionsOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
