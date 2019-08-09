import { ListCreateAccountStatusInput } from "./ListCreateAccountStatusInput";
import { ListCreateAccountStatusOutput } from "./ListCreateAccountStatusOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { UnsupportedAPIEndpointException } from "./UnsupportedAPIEndpointException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
