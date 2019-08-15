import { ListCreateAccountStatusInput } from "../shapes/ListCreateAccountStatusInput";
import { ListCreateAccountStatusOutput } from "../shapes/ListCreateAccountStatusOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "../shapes/AWSOrganizationsNotInUseException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { UnsupportedAPIEndpointException } from "../shapes/UnsupportedAPIEndpointException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListCreateAccountStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListCreateAccountStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListCreateAccountStatusInput
  },
  output: {
    shape: ListCreateAccountStatusOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: AWSOrganizationsNotInUseException
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
      shape: UnsupportedAPIEndpointException
    }
  ]
};
