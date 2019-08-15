import { ListLicenseSpecificationsForResourceInput } from "../shapes/ListLicenseSpecificationsForResourceInput";
import { ListLicenseSpecificationsForResourceOutput } from "../shapes/ListLicenseSpecificationsForResourceOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ServerInternalException } from "../shapes/ServerInternalException";
import { AuthorizationException } from "../shapes/AuthorizationException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { RateLimitExceededException } from "../shapes/RateLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
