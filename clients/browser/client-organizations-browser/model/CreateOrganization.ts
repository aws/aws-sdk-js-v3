import { CreateOrganizationInput } from "./CreateOrganizationInput";
import { CreateOrganizationOutput } from "./CreateOrganizationOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { AlreadyInOrganizationException } from "./AlreadyInOrganizationException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ConstraintViolationException } from "./ConstraintViolationException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { AccessDeniedForDependencyException } from "./AccessDeniedForDependencyException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateOrganization: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateOrganization",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateOrganizationInput
  },
  output: {
    shape: CreateOrganizationOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: AlreadyInOrganizationException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: ConstraintViolationException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: ServiceException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: AccessDeniedForDependencyException
    }
  ]
};
