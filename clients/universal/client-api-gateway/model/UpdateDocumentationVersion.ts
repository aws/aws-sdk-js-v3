import { UpdateDocumentationVersionInput } from "./UpdateDocumentationVersionInput";
import { UpdateDocumentationVersionOutput } from "./UpdateDocumentationVersionOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
