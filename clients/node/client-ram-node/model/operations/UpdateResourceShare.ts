import { UpdateResourceShareInput } from "../shapes/UpdateResourceShareInput";
import { UpdateResourceShareOutput } from "../shapes/UpdateResourceShareOutput";
import { IdempotentParameterMismatchException } from "../shapes/IdempotentParameterMismatchException";
import { MissingRequiredParameterException } from "../shapes/MissingRequiredParameterException";
import { UnknownResourceException } from "../shapes/UnknownResourceException";
import { MalformedArnException } from "../shapes/MalformedArnException";
import { InvalidClientTokenException } from "../shapes/InvalidClientTokenException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { ServerInternalException } from "../shapes/ServerInternalException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateResourceShare: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateResourceShare",
  http: {
    method: "POST",
    requestUri: "/updateresourceshare"
  },
  input: {
    shape: UpdateResourceShareInput
  },
  output: {
    shape: UpdateResourceShareOutput
  },
  errors: [
    {
      shape: IdempotentParameterMismatchException
    },
    {
      shape: MissingRequiredParameterException
    },
    {
      shape: UnknownResourceException
    },
    {
      shape: MalformedArnException
    },
    {
      shape: InvalidClientTokenException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: OperationNotPermittedException
    },
    {
      shape: ServerInternalException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
