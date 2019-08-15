import { CreateGovCloudAccountInput } from "../shapes/CreateGovCloudAccountInput";
import { CreateGovCloudAccountOutput } from "../shapes/CreateGovCloudAccountOutput";
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

export const CreateGovCloudAccount: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateGovCloudAccount",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateGovCloudAccountInput
  },
  output: {
    shape: CreateGovCloudAccountOutput
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
