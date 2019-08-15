import { UpdateDocumentationVersionInput } from "../shapes/UpdateDocumentationVersionInput";
import { UpdateDocumentationVersionOutput } from "../shapes/UpdateDocumentationVersionOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConflictException } from "../shapes/ConflictException";
import { BadRequestException } from "../shapes/BadRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateDocumentationVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDocumentationVersion",
  http: {
    method: "PATCH",
    requestUri: "/restapis/{restapi_id}/documentation/versions/{doc_version}"
  },
  input: {
    shape: UpdateDocumentationVersionInput
  },
  output: {
    shape: UpdateDocumentationVersionOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: ConflictException
    },
    {
      shape: BadRequestException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
