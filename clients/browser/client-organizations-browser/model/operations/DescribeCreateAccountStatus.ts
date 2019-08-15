import { DescribeCreateAccountStatusInput } from "../shapes/DescribeCreateAccountStatusInput";
import { DescribeCreateAccountStatusOutput } from "../shapes/DescribeCreateAccountStatusOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "../shapes/AWSOrganizationsNotInUseException";
import { CreateAccountStatusNotFoundException } from "../shapes/CreateAccountStatusNotFoundException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { UnsupportedAPIEndpointException } from "../shapes/UnsupportedAPIEndpointException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
