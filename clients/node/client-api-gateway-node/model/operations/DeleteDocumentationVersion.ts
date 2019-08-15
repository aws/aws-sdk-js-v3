import { DeleteDocumentationVersionInput } from "../shapes/DeleteDocumentationVersionInput";
import { DeleteDocumentationVersionOutput } from "../shapes/DeleteDocumentationVersionOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteDocumentationVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDocumentationVersion",
  http: {
    method: "DELETE",
    requestUri: "/restapis/{restapi_id}/documentation/versions/{doc_version}"
  },
  input: {
    shape: DeleteDocumentationVersionInput
  },
  output: {
    shape: DeleteDocumentationVersionOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: BadRequestException
    },
    {
      shape: ConflictException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
