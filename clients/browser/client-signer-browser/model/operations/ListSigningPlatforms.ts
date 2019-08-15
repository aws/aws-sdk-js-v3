import { ListSigningPlatformsInput } from "../shapes/ListSigningPlatformsInput";
import { ListSigningPlatformsOutput } from "../shapes/ListSigningPlatformsOutput";
import { ValidationException } from "../shapes/ValidationException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListSigningPlatforms: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSigningPlatforms",
  http: {
    method: "GET",
    requestUri: "/signing-platforms"
  },
  input: {
    shape: ListSigningPlatformsInput
  },
  output: {
    shape: ListSigningPlatformsOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalServiceErrorException
    }
  ]
};
