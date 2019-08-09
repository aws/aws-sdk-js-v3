import { UpdateResourceShareInput } from "./UpdateResourceShareInput";
import { UpdateResourceShareOutput } from "./UpdateResourceShareOutput";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { UnknownResourceException } from "./UnknownResourceException";
import { MalformedArnException } from "./MalformedArnException";
import { InvalidClientTokenException } from "./InvalidClientTokenException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { ServerInternalException } from "./ServerInternalException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
