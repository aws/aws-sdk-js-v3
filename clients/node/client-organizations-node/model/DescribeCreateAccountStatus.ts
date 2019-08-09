import { DescribeCreateAccountStatusInput } from "./DescribeCreateAccountStatusInput";
import { DescribeCreateAccountStatusOutput } from "./DescribeCreateAccountStatusOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { CreateAccountStatusNotFoundException } from "./CreateAccountStatusNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { UnsupportedAPIEndpointException } from "./UnsupportedAPIEndpointException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeCreateAccountStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeCreateAccountStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeCreateAccountStatusInput
  },
  output: {
    shape: DescribeCreateAccountStatusOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: AWSOrganizationsNotInUseException
    },
    {
      shape: CreateAccountStatusNotFoundException
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
