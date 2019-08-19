import { ListTargetsForPolicyInput } from "../shapes/ListTargetsForPolicyInput";
import { ListTargetsForPolicyOutput } from "../shapes/ListTargetsForPolicyOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "../shapes/AWSOrganizationsNotInUseException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { PolicyNotFoundException } from "../shapes/PolicyNotFoundException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTargetsForPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTargetsForPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTargetsForPolicyInput
  },
  output: {
    shape: ListTargetsForPolicyOutput
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
