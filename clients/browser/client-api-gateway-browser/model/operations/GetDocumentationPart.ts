import { GetDocumentationPartInput } from "../shapes/GetDocumentationPartInput";
import { GetDocumentationPartOutput } from "../shapes/GetDocumentationPartOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDocumentationPart: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDocumentationPart",
  http: {
    method: "GET",
    requestUri: "/restapis/{restapi_id}/documentation/parts/{part_id}"
  },
  input: {
    shape: GetDocumentationPartInput
  },
  output: {
    shape: GetDocumentationPartOutput
  },
  errors: [
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
