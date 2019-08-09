import { GetDocumentationPartsInput } from "./GetDocumentationPartsInput";
import { GetDocumentationPartsOutput } from "./GetDocumentationPartsOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
