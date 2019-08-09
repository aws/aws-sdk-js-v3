import { ListSigningPlatformsInput } from "./ListSigningPlatformsInput";
import { ListSigningPlatformsOutput } from "./ListSigningPlatformsOutput";
import { ValidationException } from "./ValidationException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
