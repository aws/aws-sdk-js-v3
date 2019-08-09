import { GetThingShadowInput } from "./GetThingShadowInput";
import { GetThingShadowOutput } from "./GetThingShadowOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { UnsupportedDocumentEncodingException } from "./UnsupportedDocumentEncodingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetThingShadow: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetThingShadow",
  http: {
    method: "GET",
    requestUri: "/things/{thingName}/shadow"
  },
  input: {
    shape: GetThingShadowInput
  },
  output: {
    shape: GetThingShadowOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
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
