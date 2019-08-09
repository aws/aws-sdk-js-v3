import { DescribePolicyInput } from "./DescribePolicyInput";
import { DescribePolicyOutput } from "./DescribePolicyOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { InvalidInputException } from "./InvalidInputException";
import { PolicyNotFoundException } from "./PolicyNotFoundException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribePolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribePolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribePolicyInput
  },
  output: {
    shape: DescribePolicyOutput
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
      shape: PolicyNotFoundException
    },
    {
      shape: ServiceException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
