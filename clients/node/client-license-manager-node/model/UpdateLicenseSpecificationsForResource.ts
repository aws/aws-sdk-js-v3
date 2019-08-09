import { UpdateLicenseSpecificationsForResourceInput } from "./UpdateLicenseSpecificationsForResourceInput";
import { UpdateLicenseSpecificationsForResourceOutput } from "./UpdateLicenseSpecificationsForResourceOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidResourceStateException } from "./InvalidResourceStateException";
import { LicenseUsageException } from "./LicenseUsageException";
import { ServerInternalException } from "./ServerInternalException";
import { AuthorizationException } from "./AuthorizationException";
import { AccessDeniedException } from "./AccessDeniedException";
import { RateLimitExceededException } from "./RateLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
