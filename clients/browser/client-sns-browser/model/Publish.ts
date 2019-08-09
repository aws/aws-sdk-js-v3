import { PublishInput } from "./PublishInput";
import { PublishOutput } from "./PublishOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InternalErrorException } from "./InternalErrorException";
import { NotFoundException } from "./NotFoundException";
import { EndpointDisabledException } from "./EndpointDisabledException";
import { PlatformApplicationDisabledException } from "./PlatformApplicationDisabledException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { KMSDisabledException } from "./KMSDisabledException";
import { KMSInvalidStateException } from "./KMSInvalidStateException";
import { KMSNotFoundException } from "./KMSNotFoundException";
import { KMSOptInRequired } from "./KMSOptInRequired";
import { KMSThrottlingException } from "./KMSThrottlingException";
import { KMSAccessDeniedException } from "./KMSAccessDeniedException";
import { InvalidSecurityException } from "./InvalidSecurityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
