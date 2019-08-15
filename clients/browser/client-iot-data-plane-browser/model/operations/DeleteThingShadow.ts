import { DeleteThingShadowInput } from "../shapes/DeleteThingShadowInput";
import { DeleteThingShadowOutput } from "../shapes/DeleteThingShadowOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { UnsupportedDocumentEncodingException } from "../shapes/UnsupportedDocumentEncodingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteThingShadow: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteThingShadow",
  http: {
    method: "DELETE",
    requestUri: "/things/{thingName}/shadow"
  },
  input: {
    shape: DeleteThingShadowInput
  },
  output: {
    shape: DeleteThingShadowOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
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
