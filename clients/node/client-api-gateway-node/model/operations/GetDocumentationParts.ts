import { GetDocumentationPartsInput } from "../shapes/GetDocumentationPartsInput";
import { GetDocumentationPartsOutput } from "../shapes/GetDocumentationPartsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDocumentationParts: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDocumentationParts",
  http: {
    method: "GET",
    requestUri: "/restapis/{restapi_id}/documentation/parts"
  },
  input: {
    shape: GetDocumentationPartsInput
  },
  output: {
    shape: GetDocumentationPartsOutput
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
