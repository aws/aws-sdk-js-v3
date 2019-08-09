import { ListLicenseSpecificationsForResourceInput } from "./ListLicenseSpecificationsForResourceInput";
import { ListLicenseSpecificationsForResourceOutput } from "./ListLicenseSpecificationsForResourceOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalException } from "./ServerInternalException";
import { AuthorizationException } from "./AuthorizationException";
import { AccessDeniedException } from "./AccessDeniedException";
import { RateLimitExceededException } from "./RateLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListLicenseSpecificationsForResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListLicenseSpecificationsForResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListLicenseSpecificationsForResourceInput
  },
  output: {
    shape: ListLicenseSpecificationsForResourceOutput
  },
  errors: [
    {
      shape: InvalidParameterValueException
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
