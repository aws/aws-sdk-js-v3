import { DeleteDocumentationPartInput } from "./DeleteDocumentationPartInput";
import { DeleteDocumentationPartOutput } from "./DeleteDocumentationPartOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConflictException } from "./ConflictException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
