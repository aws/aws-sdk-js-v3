import { DescribePolicyInput } from "../shapes/DescribePolicyInput";
import { DescribePolicyOutput } from "../shapes/DescribePolicyOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "../shapes/AWSOrganizationsNotInUseException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { PolicyNotFoundException } from "../shapes/PolicyNotFoundException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
