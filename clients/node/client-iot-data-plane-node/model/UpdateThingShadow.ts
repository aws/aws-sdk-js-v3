import { UpdateThingShadowInput } from "./UpdateThingShadowInput";
import { UpdateThingShadowOutput } from "./UpdateThingShadowOutput";
import { ConflictException } from "./ConflictException";
import { RequestEntityTooLargeException } from "./RequestEntityTooLargeException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { UnsupportedDocumentEncodingException } from "./UnsupportedDocumentEncodingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateThingShadow: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateThingShadow",
  http: {
    method: "POST",
    requestUri: "/things/{thingName}/shadow"
  },
  input: {
    shape: UpdateThingShadowInput
  },
  output: {
    shape: UpdateThingShadowOutput
  },
  errors: [
    {
      shape: ConflictException
    },
    {
      shape: RequestEntityTooLargeException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: MethodNotAllowedException
    },
    {
      shape: UnsupportedDocumentEncodingException
    }
  ]
};
