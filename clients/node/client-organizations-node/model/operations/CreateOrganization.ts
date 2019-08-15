import { CreateOrganizationInput } from "../shapes/CreateOrganizationInput";
import { CreateOrganizationOutput } from "../shapes/CreateOrganizationOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AlreadyInOrganizationException } from "../shapes/AlreadyInOrganizationException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { ConstraintViolationException } from "../shapes/ConstraintViolationException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { AccessDeniedForDependencyException } from "../shapes/AccessDeniedForDependencyException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
