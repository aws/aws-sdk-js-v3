import { DeleteDocumentationPartInput } from "../shapes/DeleteDocumentationPartInput";
import { DeleteDocumentationPartOutput } from "../shapes/DeleteDocumentationPartOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ConflictException } from "../shapes/ConflictException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteDocumentationPart: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDocumentationPart",
  http: {
    method: "DELETE",
    requestUri: "/restapis/{restapi_id}/documentation/parts/{part_id}"
  },
  input: {
    shape: DeleteDocumentationPartInput
  },
  output: {
    shape: DeleteDocumentationPartOutput
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
    },
    {
      shape: ConflictException
    },
    {
      shape: BadRequestException
    }
  ]
};
