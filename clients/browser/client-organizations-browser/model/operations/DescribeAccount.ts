import { DescribeAccountInput } from "../shapes/DescribeAccountInput";
import { DescribeAccountOutput } from "../shapes/DescribeAccountOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AccountNotFoundException } from "../shapes/AccountNotFoundException";
import { AWSOrganizationsNotInUseException } from "../shapes/AWSOrganizationsNotInUseException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAccount: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAccount",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAccountInput
  },
  output: {
    shape: DescribeAccountOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: AccountNotFoundException
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
    }
  ]
};
