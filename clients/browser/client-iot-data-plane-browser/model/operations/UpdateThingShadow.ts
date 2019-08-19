import { UpdateThingShadowInput } from "../shapes/UpdateThingShadowInput";
import { UpdateThingShadowOutput } from "../shapes/UpdateThingShadowOutput";
import { ConflictException } from "../shapes/ConflictException";
import { RequestEntityTooLargeException } from "../shapes/RequestEntityTooLargeException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { UnsupportedDocumentEncodingException } from "../shapes/UnsupportedDocumentEncodingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
