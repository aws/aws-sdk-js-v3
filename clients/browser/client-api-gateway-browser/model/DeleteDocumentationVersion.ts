import { DeleteDocumentationVersionInput } from "./DeleteDocumentationVersionInput";
import { DeleteDocumentationVersionOutput } from "./DeleteDocumentationVersionOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
