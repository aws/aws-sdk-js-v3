import { CreateGovCloudAccountInput } from "./CreateGovCloudAccountInput";
import { CreateGovCloudAccountOutput } from "./CreateGovCloudAccountOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ConstraintViolationException } from "./ConstraintViolationException";
import { InvalidInputException } from "./InvalidInputException";
import { FinalizingOrganizationException } from "./FinalizingOrganizationException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { UnsupportedAPIEndpointException } from "./UnsupportedAPIEndpointException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
