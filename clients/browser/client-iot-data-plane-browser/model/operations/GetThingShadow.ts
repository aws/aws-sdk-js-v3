import { GetThingShadowInput } from "../shapes/GetThingShadowInput";
import { GetThingShadowOutput } from "../shapes/GetThingShadowOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { UnsupportedDocumentEncodingException } from "../shapes/UnsupportedDocumentEncodingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
