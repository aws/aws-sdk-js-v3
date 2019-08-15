import { UpdateLicenseSpecificationsForResourceInput } from "../shapes/UpdateLicenseSpecificationsForResourceInput";
import { UpdateLicenseSpecificationsForResourceOutput } from "../shapes/UpdateLicenseSpecificationsForResourceOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidResourceStateException } from "../shapes/InvalidResourceStateException";
import { LicenseUsageException } from "../shapes/LicenseUsageException";
import { ServerInternalException } from "../shapes/ServerInternalException";
import { AuthorizationException } from "../shapes/AuthorizationException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { RateLimitExceededException } from "../shapes/RateLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateLicenseSpecificationsForResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateLicenseSpecificationsForResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateLicenseSpecificationsForResourceInput
  },
  output: {
    shape: UpdateLicenseSpecificationsForResourceOutput
  },
  errors: [
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidResourceStateException
    },
    {
      shape: LicenseUsageException
    },
    {
      shape: ServerInternalException
    },
    {
      shape: AuthorizationException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: RateLimitExceededException
    }
  ]
};
