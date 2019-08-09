import { DescribeAccountInput } from "./DescribeAccountInput";
import { DescribeAccountOutput } from "./DescribeAccountOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { AccountNotFoundException } from "./AccountNotFoundException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
