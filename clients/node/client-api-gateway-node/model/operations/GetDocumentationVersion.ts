import { GetDocumentationVersionInput } from "../shapes/GetDocumentationVersionInput";
import { GetDocumentationVersionOutput } from "../shapes/GetDocumentationVersionOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDocumentationVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDocumentationVersion",
  http: {
    method: "GET",
    requestUri: "/restapis/{restapi_id}/documentation/versions/{doc_version}"
  },
  input: {
    shape: GetDocumentationVersionInput
  },
  output: {
    shape: GetDocumentationVersionOutput
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
