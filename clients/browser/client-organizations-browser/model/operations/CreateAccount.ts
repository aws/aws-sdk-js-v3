import { CreateAccountInput } from "../shapes/CreateAccountInput";
import { CreateAccountOutput } from "../shapes/CreateAccountOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "../shapes/AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { ConstraintViolationException } from "../shapes/ConstraintViolationException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { FinalizingOrganizationException } from "../shapes/FinalizingOrganizationException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { UnsupportedAPIEndpointException } from "../shapes/UnsupportedAPIEndpointException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateAccount: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateAccount",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateAccountInput
  },
  output: {
    shape: CreateAccountOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: AWSOrganizationsNotInUseException
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
      shape: FinalizingOrganizationException
    },
    {
      shape: ServiceException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: UnsupportedAPIEndpointException
    }
  ]
};
