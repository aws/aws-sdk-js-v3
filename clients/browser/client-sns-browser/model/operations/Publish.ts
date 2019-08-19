import { PublishInput } from "../shapes/PublishInput";
import { PublishOutput } from "../shapes/PublishOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { NotFoundException } from "../shapes/NotFoundException";
import { EndpointDisabledException } from "../shapes/EndpointDisabledException";
import { PlatformApplicationDisabledException } from "../shapes/PlatformApplicationDisabledException";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { KMSDisabledException } from "../shapes/KMSDisabledException";
import { KMSInvalidStateException } from "../shapes/KMSInvalidStateException";
import { KMSNotFoundException } from "../shapes/KMSNotFoundException";
import { KMSOptInRequired } from "../shapes/KMSOptInRequired";
import { KMSThrottlingException } from "../shapes/KMSThrottlingException";
import { KMSAccessDeniedException } from "../shapes/KMSAccessDeniedException";
import { InvalidSecurityException } from "../shapes/InvalidSecurityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const Publish: _Operation_ = {
  metadata: ServiceMetadata,
  name: "Publish",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PublishInput
  },
  output: {
    shape: PublishOutput,
    resultWrapper: "PublishResult"
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: NotFoundException
    },
    {
      shape: EndpointDisabledException
    },
    {
      shape: PlatformApplicationDisabledException
    },
    {
      shape: AuthorizationErrorException
    },
    {
      shape: KMSDisabledException
    },
    {
      shape: KMSInvalidStateException
    },
    {
      shape: KMSNotFoundException
    },
    {
      shape: KMSOptInRequired
    },
    {
      shape: KMSThrottlingException
    },
    {
      shape: KMSAccessDeniedException
    },
    {
      shape: InvalidSecurityException
    }
  ]
};
